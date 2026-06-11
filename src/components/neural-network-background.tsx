"use client";

import { useEffect, useRef } from "react";

type Node = {
  baseX: number;
  baseY: number;
  cluster: number;
  hub: boolean;
  phase: number;
  radius: number;
  x: number;
  y: number;
};

type Edge = {
  buildFrom: number;
  buildOrder: number;
  from: number;
  pulse: boolean;
  to: number;
};

const CURSOR_RADIUS = 235;
const CURSOR_STRENGTH = 20;
const MAX_DPR = 2;
const BUILD_DURATION_MS = 2000;
const EDGE_START_PROGRESS = 0.04;
const EDGE_START_SPREAD = 0.78;

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

function easeOutCubic(progress: number) {
  const inverse = 1 - progress;
  return 1 - inverse * inverse * inverse;
}

function segmentProgress(progress: number, start: number, end: number) {
  return easeOutCubic(clamp01((progress - start) / (end - start)));
}

function createRandom(seed: number) {
  let state = seed >>> 0;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function nodeCountForWidth(width: number) {
  if (width >= 1600) return 64;
  if (width >= 1200) return 56;
  if (width >= 900) return 42;
  if (width >= 640) return 28;
  return 18;
}

function distance(a: Node, b: Node) {
  return Math.hypot(a.baseX - b.baseX, a.baseY - b.baseY);
}

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;
    const canvas: HTMLCanvasElement = canvasElement;

    const drawingContext = canvas.getContext("2d", { alpha: true });
    if (!drawingContext) return;
    const context: CanvasRenderingContext2D = drawingContext;

    const mediaReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mediaTouch = window.matchMedia("(hover: none), (pointer: coarse)");

    let reducedMotion = mediaReduce.matches;
    let touchOnly = mediaTouch.matches;
    let animationFrame = 0;
    let buildStartedAt: number | null = null;
    let dpr = 1;
    let height = 0;
    let inView = true;
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let nodeBuildStarts: number[] = [];
    let visible = !document.hidden;
    let width = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    function clusterDefinitions() {
      const textSafe = width < 760;
      return [
        {
          x: width * (textSafe ? 0.7 : 0.73),
          y: height * 0.44,
          rx: width * (textSafe ? 0.23 : 0.16),
          ry: height * 0.24,
          weight: 0.58,
        },
        {
          x: width * 0.86,
          y: height * 0.24,
          rx: width * 0.12,
          ry: height * 0.13,
          weight: 0.17,
        },
        {
          x: width * 0.84,
          y: height * 0.72,
          rx: width * 0.14,
          ry: height * 0.17,
          weight: 0.18,
        },
        {
          x: width * (textSafe ? 0.55 : 0.5),
          y: height * 0.58,
          rx: width * 0.1,
          ry: height * 0.16,
          weight: 0.09,
        },
      ];
    }

    function pickCluster(random: () => number) {
      const clusters = clusterDefinitions();
      const target = random();
      let total = 0;

      for (let i = 0; i < clusters.length; i += 1) {
        total += clusters[i].weight;
        if (target <= total) return i;
      }

      return clusters.length - 1;
    }

    function buildNodes() {
      const random = createRandom(Math.round(width * 37 + height * 11));
      const count = nodeCountForWidth(width);
      const clusters = clusterDefinitions();
      const hubCount = Math.max(2, Math.min(6, Math.round(count * 0.12)));

      nodes = Array.from({ length: count }, (_, index) => {
        const clusterIndex = index < hubCount ? index % Math.min(3, clusters.length) : pickCluster(random);
        const cluster = clusters[clusterIndex];
        const angle = random() * Math.PI * 2;
        const spread = Math.sqrt(random());
        const hub = index < hubCount;
        const baseX = cluster.x + Math.cos(angle) * cluster.rx * spread;
        const baseY = cluster.y + Math.sin(angle) * cluster.ry * spread;

        const minimumX = width < 760 ? width * 0.08 : width * 0.38;

        return {
          baseX: Math.max(minimumX, Math.min(width * 0.97, baseX)),
          baseY: Math.max(height * 0.08, Math.min(height * 0.92, baseY)),
          cluster: clusterIndex,
          hub,
          phase: random() * Math.PI * 2,
          radius: hub ? 7 + random() * 4.5 : 2.1 + random() * 2.8,
          x: baseX,
          y: baseY,
        };
      });
    }

    function buildEdges() {
      edges = [];

      nodes.forEach((node, index) => {
        const neighbours = nodes
          .map((candidate, candidateIndex) => ({
            distance: distance(node, candidate),
            index: candidateIndex,
            sameCluster: candidate.cluster === node.cluster,
          }))
          .filter((candidate) => candidate.index !== index)
          .sort((a, b) => {
            if (a.sameCluster !== b.sameCluster) return a.sameCluster ? -1 : 1;
            return a.distance - b.distance;
          });

        const maxDistance = Math.max(node.hub ? width * 0.22 : width * 0.16, node.hub ? 240 : 180);
        const edgeTargetCount = node.hub ? 4 : 2;

        neighbours
          .filter((neighbour) => neighbour.distance <= maxDistance)
          .slice(0, edgeTargetCount)
          .forEach((neighbour, neighbourIndex) => {
            const from = Math.min(index, neighbour.index);
            const to = Math.max(index, neighbour.index);
            const exists = edges.some((edge) => edge.from === from && edge.to === to);

            if (!exists) {
              edges.push({
                buildFrom: from,
                buildOrder: edges.length,
                from,
                to,
                pulse: node.hub || neighbourIndex === 0,
              });
            }
          });
      });

      const hubs = nodes.map((node, index) => ({ node, index })).filter((item) => item.node.hub);
      for (let i = 0; i < hubs.length - 1; i += 1) {
        edges.push({
          buildFrom: Math.min(hubs[i].index, hubs[i + 1].index),
          buildOrder: edges.length,
          from: Math.min(hubs[i].index, hubs[i + 1].index),
          to: Math.max(hubs[i].index, hubs[i + 1].index),
          pulse: true,
        });
      }

      assignBuildSequence();
    }

    function edgeDurationProgress() {
      return Math.max(0.11, Math.min(0.22, 7 / Math.max(1, edges.length)));
    }

    function edgeStartFor(edge: Edge) {
      return EDGE_START_PROGRESS + (edge.buildOrder / Math.max(1, edges.length - 1)) * EDGE_START_SPREAD;
    }

    function assignBuildSequence() {
      const hubIndexes = nodes
        .map((node, index) => ({ index, node }))
        .filter((item) => item.node.hub)
        .map((item) => item.index);

      const hubDistances = nodes.map((node) => {
        if (node.hub || hubIndexes.length === 0) return 0;

        return Math.min(
          ...hubIndexes.map((hubIndex) => {
            const hub = nodes[hubIndex];
            return Math.hypot(node.baseX - hub.baseX, node.baseY - hub.baseY);
          }),
        );
      });

      edges
        .map((edge, index) => {
          const fromDistance = hubDistances[edge.from];
          const toDistance = hubDistances[edge.to];
          const buildFrom = fromDistance <= toDistance ? edge.from : edge.to;
          const buildTo = buildFrom === edge.from ? edge.to : edge.from;
          const length = Math.hypot(nodes[edge.from].baseX - nodes[edge.to].baseX, nodes[edge.from].baseY - nodes[edge.to].baseY);
          const deterministicOffset = ((edge.from * 19 + edge.to * 31) % 23) * 4;
          const score =
            Math.min(fromDistance, toDistance) +
            Math.max(fromDistance, toDistance) * 0.18 +
            length * 0.2 +
            deterministicOffset;

          return { buildFrom, buildTo, edge, index, score };
        })
        .sort((a, b) => {
          if (a.score !== b.score) return a.score - b.score;
          if (a.buildTo !== b.buildTo) return a.buildTo - b.buildTo;
          return a.index - b.index;
        })
        .forEach((item, order) => {
          item.edge.buildFrom = item.buildFrom;
          item.edge.buildOrder = order;
        });

      buildNodeStarts();
    }

    function buildNodeStarts() {
      const edgeDuration = edgeDurationProgress();
      nodeBuildStarts = nodes.map((node) => (node.hub ? 0 : 1));

      for (const edge of edges) {
        const start = edgeStartFor(edge);
        const source = edge.buildFrom;
        const target = edge.buildFrom === edge.from ? edge.to : edge.from;

        nodeBuildStarts[source] = Math.min(nodeBuildStarts[source] ?? 1, start);
        nodeBuildStarts[target] = Math.min(nodeBuildStarts[target] ?? 1, start + edgeDuration * 0.58);
      }

      nodeBuildStarts = nodeBuildStarts.map((start, index) => Math.min(start, nodes[index]?.hub ? 0 : 0.86));
    }

    function setSize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildNodes();
      buildEdges();
      scheduleDraw();
    }

    function pointerInfluence(x: number, y: number) {
      if (touchOnly || !pointer.active) return { dx: 0, dy: 0, strength: 0 };

      const dx = x - pointer.x;
      const dy = y - pointer.y;
      const distanceFromPointer = Math.hypot(dx, dy);
      if (distanceFromPointer > CURSOR_RADIUS || distanceFromPointer === 0) return { dx: 0, dy: 0, strength: 0 };

      const strength = (1 - distanceFromPointer / CURSOR_RADIUS) ** 2;
      const push = strength * CURSOR_STRENGTH;

      return {
        dx: (dx / distanceFromPointer) * push,
        dy: (dy / distanceFromPointer) * push,
        strength,
      };
    }

    function updateNodes(time: number) {
      for (const node of nodes) {
        const idleScale = reducedMotion ? 0.08 : 1;
        const driftX = Math.cos(time * 0.00018 + node.phase) * (node.hub ? 2.2 : 3.6) * idleScale;
        const driftY = Math.sin(time * 0.00016 + node.phase * 1.4) * (node.hub ? 1.8 : 3) * idleScale;
        const pointerOffset = pointerInfluence(node.baseX + driftX, node.baseY + driftY);

        node.x = node.baseX + driftX + pointerOffset.dx;
        node.y = node.baseY + driftY + pointerOffset.dy;
      }
    }

    function drawBackground() {
      context.clearRect(0, 0, width, height);

      const rightGlow = context.createRadialGradient(width * 0.74, height * 0.43, 0, width * 0.74, height * 0.43, width * 0.5);
      rightGlow.addColorStop(0, "rgba(45, 212, 191, 0.12)");
      rightGlow.addColorStop(0.32, "rgba(79, 141, 247, 0.075)");
      rightGlow.addColorStop(1, "rgba(45, 212, 191, 0)");
      context.fillStyle = rightGlow;
      context.fillRect(0, 0, width, height);

      const textShade = context.createLinearGradient(0, 0, width, 0);
      textShade.addColorStop(0, "rgba(8, 17, 26, 0.58)");
      textShade.addColorStop(0.42, "rgba(8, 17, 26, 0.22)");
      textShade.addColorStop(0.72, "rgba(8, 17, 26, 0)");
      context.fillStyle = textShade;
      context.fillRect(0, 0, width, height);
    }

    function buildProgressForTime(time: number) {
      if (reducedMotion) return 1;
      if (buildStartedAt === null) buildStartedAt = time;
      return clamp01((time - buildStartedAt) / BUILD_DURATION_MS);
    }

    function drawEdges(time: number, buildProgress: number) {
      context.lineCap = "round";
      context.lineJoin = "round";
      const edgeDuration = edgeDurationProgress();

      for (let edgeIndex = 0; edgeIndex < edges.length; edgeIndex += 1) {
        const edge = edges[edgeIndex];
        const from = nodes[edge.from];
        const to = nodes[edge.to];
        const sourceIndex = buildProgress >= 1 ? edge.from : edge.buildFrom;
        const targetIndex = buildProgress >= 1 ? edge.to : sourceIndex === edge.from ? edge.to : edge.from;
        const source = nodes[sourceIndex];
        const target = nodes[targetIndex];
        const midpointX = (from.x + to.x) / 2;
        const midpointY = (from.y + to.y) / 2;
        const pointerStrength = pointerInfluence(midpointX, midpointY).strength;
        const length = Math.hypot(from.x - to.x, from.y - to.y);
        const lengthFade = Math.max(0.26, 1 - length / Math.max(width * 0.34, 240));
        const baseAlpha = 0.08 + lengthFade * 0.14;
        const alpha = Math.min(0.46, baseAlpha + pointerStrength * 0.22);
        const activeEdge = edge.pulse || from.hub || to.hub;
        const edgeStart = edgeStartFor(edge);
        const edgeEnd = Math.min(0.98, edgeStart + edgeDuration);
        const edgeProgress = segmentProgress(buildProgress, edgeStart, edgeEnd);

        if (edgeProgress <= 0) continue;

        const headX = source.x + (target.x - source.x) * edgeProgress;
        const headY = source.y + (target.y - source.y) * edgeProgress;

        if (!reducedMotion && buildProgress < 1 && edgeProgress < 1) {
          const signalGlow = Math.sin(edgeProgress * Math.PI);
          const signalGradient = context.createLinearGradient(source.x, source.y, headX, headY);
          signalGradient.addColorStop(0, "rgba(45, 212, 191, 0.03)");
          signalGradient.addColorStop(0.72, `rgba(110, 168, 254, ${0.13 + signalGlow * 0.18})`);
          signalGradient.addColorStop(1, `rgba(45, 212, 191, ${0.34 + signalGlow * 0.36})`);

          context.beginPath();
          context.moveTo(source.x, source.y);
          context.lineTo(headX, headY);
          context.strokeStyle = signalGradient;
          context.lineWidth = activeEdge ? 1.9 + signalGlow * 0.75 : 1.35 + signalGlow * 0.55;
          context.stroke();

          context.beginPath();
          context.arc(headX, headY, 2.4 + signalGlow * 4.6, 0, Math.PI * 2);
          context.fillStyle = `rgba(45, 212, 191, ${0.18 + signalGlow * 0.36})`;
          context.fill();

          context.beginPath();
          context.arc(headX, headY, 6.5 + signalGlow * 8, 0, Math.PI * 2);
          context.strokeStyle = `rgba(110, 168, 254, ${signalGlow * 0.18})`;
          context.lineWidth = 0.9;
          context.stroke();

          const attachProgress = segmentProgress(edgeProgress, 0.72, 1);
          const attachGlow = Math.sin(attachProgress * Math.PI);
          if (attachGlow > 0) {
            context.beginPath();
            context.arc(target.x, target.y, target.radius + 5 + attachGlow * 8, 0, Math.PI * 2);
            context.strokeStyle = `rgba(45, 212, 191, ${attachGlow * 0.32})`;
            context.lineWidth = 1.1;
            context.stroke();
          }
        }

        context.beginPath();
        context.moveTo(source.x, source.y);
        context.lineTo(headX, headY);
        context.strokeStyle = activeEdge
          ? `rgba(110, 168, 254, ${alpha * Math.min(1, edgeProgress * 1.4)})`
          : `rgba(179, 192, 206, ${alpha * 0.74 * Math.min(1, edgeProgress * 1.4)})`;
        context.lineWidth = activeEdge ? 0.85 + pointerStrength * 0.5 : 0.65 + pointerStrength * 0.42;
        context.stroke();

        if (!reducedMotion && edge.pulse) {
          const phase = (time * 0.00008 + edge.from * 0.137 + edge.to * 0.071) % 1;
          const pulseProgress = phase * edgeProgress;
          const pulseX = source.x + (target.x - source.x) * pulseProgress;
          const pulseY = source.y + (target.y - source.y) * pulseProgress;

          context.beginPath();
          context.arc(pulseX, pulseY, 1.25 + pointerStrength * 0.9, 0, Math.PI * 2);
          context.fillStyle = `rgba(45, 212, 191, ${(0.24 + pointerStrength * 0.32) * edgeProgress})`;
          context.fill();
        }
      }
    }

    function drawNodes(time: number, buildProgress: number) {
      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];
        const pointerStrength = pointerInfluence(node.x, node.y).strength;
        const breathe = reducedMotion ? 0 : Math.sin(time * 0.001 + node.phase) * 0.45;
        const radius = node.radius + (node.hub ? breathe : breathe * 0.3) + pointerStrength * 1.2;
        const tealNode = node.hub || (node.cluster === 0 && index % 7 === 0) || (node.cluster === 2 && index % 9 === 0);
        const cobaltNode = !tealNode && ((node.cluster === 1 && index % 4 === 0) || (node.cluster === 0 && index % 11 === 0));
        const nodeStart = nodeBuildStarts[index] ?? (node.hub ? 0 : 0.86);
        const nodeEnd = Math.min(1, nodeStart + (node.hub ? 0.18 : 0.16));
        const nodeProgress = segmentProgress(buildProgress, nodeStart, nodeEnd);

        if (nodeProgress <= 0) continue;

        const animatedRadius = radius * (0.45 + nodeProgress * 0.55);
        const activationGlow = !reducedMotion && buildProgress < 1 ? Math.sin(nodeProgress * Math.PI) : 0;

        if (activationGlow > 0) {
          context.beginPath();
          context.arc(node.x, node.y, animatedRadius + 8 + activationGlow * 8, 0, Math.PI * 2);
          context.fillStyle = `rgba(45, 212, 191, ${activationGlow * 0.08})`;
          context.fill();

          context.beginPath();
          context.arc(node.x, node.y, animatedRadius + 3 + activationGlow * 5, 0, Math.PI * 2);
          context.strokeStyle = `rgba(110, 168, 254, ${activationGlow * 0.16})`;
          context.lineWidth = 0.9;
          context.stroke();
        }

        if (node.hub) {
          context.beginPath();
          context.arc(node.x, node.y, animatedRadius + 6 * nodeProgress, 0, Math.PI * 2);
          context.fillStyle = `rgba(45, 212, 191, ${(0.06 + pointerStrength * 0.1) * nodeProgress})`;
          context.fill();
        }

        context.beginPath();
        context.arc(node.x, node.y, animatedRadius, 0, Math.PI * 2);
        context.fillStyle = tealNode
          ? `rgba(45, 212, 191, ${(node.hub ? 0.5 + pointerStrength * 0.26 : 0.34 + pointerStrength * 0.28) * nodeProgress})`
          : cobaltNode
            ? `rgba(110, 168, 254, ${(0.32 + pointerStrength * 0.26) * nodeProgress})`
            : `rgba(244, 247, 251, ${(0.26 + pointerStrength * 0.3) * nodeProgress})`;
        context.fill();

        context.beginPath();
        context.arc(node.x, node.y, animatedRadius + 2.1 * nodeProgress, 0, Math.PI * 2);
        context.strokeStyle = tealNode
          ? `rgba(45, 212, 191, ${(node.hub ? 0.22 + pointerStrength * 0.2 : 0.1 + pointerStrength * 0.12) * nodeProgress})`
          : `rgba(110, 168, 254, ${(0.055 + pointerStrength * 0.12) * nodeProgress})`;
        context.lineWidth = 0.8;
        context.stroke();
      }
    }

    function drawVignette() {
      const vignette = context.createRadialGradient(width * 0.58, height * 0.45, width * 0.12, width * 0.58, height * 0.45, width * 0.72);
      vignette.addColorStop(0, "rgba(8, 17, 26, 0)");
      vignette.addColorStop(0.68, "rgba(8, 17, 26, 0.12)");
      vignette.addColorStop(1, "rgba(8, 17, 26, 0.54)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);
    }

    function draw(time: number) {
      if (!visible || !inView) return;

      const buildProgress = buildProgressForTime(time);
      updateNodes(time);
      drawBackground();
      drawEdges(time, buildProgress);
      drawNodes(time, buildProgress);
      drawVignette();

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    }

    function scheduleDraw() {
      window.cancelAnimationFrame(animationFrame);
      if (reducedMotion) {
        const now = performance.now();
        updateNodes(now);
        drawBackground();
        drawEdges(now, 1);
        drawNodes(now, 1);
        drawVignette();
        return;
      }
      if (!visible || !inView) return;
      animationFrame = window.requestAnimationFrame(draw);
    }

    function onPointerMove(event: PointerEvent) {
      if (touchOnly || event.pointerType === "touch") return;

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      pointer.active = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      pointer.x = x;
      pointer.y = y;
    }

    function onPointerLeave() {
      pointer.active = false;
    }

    function onVisibilityChange() {
      visible = !document.hidden;
      if (visible) {
        scheduleDraw();
      } else {
        window.cancelAnimationFrame(animationFrame);
      }
    }

    function onReduceChange(event: MediaQueryListEvent) {
      reducedMotion = event.matches;
      scheduleDraw();
    }

    function onTouchChange(event: MediaQueryListEvent) {
      touchOnly = event.matches;
      pointer.active = false;
      scheduleDraw();
    }

    // Stop the animation loop entirely while the hero is scrolled out of view.
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const wasInView = inView;
        inView = entries.some((entry) => entry.isIntersecting);
        if (inView && !wasInView) {
          scheduleDraw();
        } else if (!inView) {
          window.cancelAnimationFrame(animationFrame);
        }
      },
      { rootMargin: "80px 0px" },
    );
    intersectionObserver.observe(canvas);

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    mediaReduce.addEventListener("change", onReduceChange);
    mediaTouch.addEventListener("change", onTouchChange);

    setSize();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      mediaReduce.removeEventListener("change", onReduceChange);
      mediaTouch.removeEventListener("change", onTouchChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-100"
    />
  );
}
