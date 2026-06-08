@echo off
setlocal

cd /d "%~dp0"

echo.
echo ZZESK Consulting website launcher
echo ---------------------------------

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Please install Node.js, then run this file again.
  echo Download Node.js from https://nodejs.org/
  pause
  exit /b 1
)

if not exist package.json (
  echo package.json was not found. Make sure this file is inside the website project folder.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies. This may take a minute the first time...
  call npm install
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

powershell -NoProfile -Command "if (Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }" >nul 2>nul
if not errorlevel 1 (
  echo Something is already running at http://localhost:3000
  echo Opening it now.
  start "" "http://localhost:3000"
  exit /b 0
)

echo Starting the local development server at http://localhost:3000
echo A separate server window will stay open while the website is running.

start "ZZESK Consulting Dev Server" cmd /k "cd /d "%~dp0" && npm run dev -- -p 3000"

timeout /t 5 /nobreak >nul
start "" "http://localhost:3000"

echo.
echo If the browser opens before the site is ready, wait a few seconds and refresh.
echo Close the "ZZESK Consulting Dev Server" window to stop the website.
pause
