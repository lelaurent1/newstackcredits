#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

echo "Installing dependencies..."
if command -v bun &> /dev/null; then
  bun install
else
  npm install
fi

echo "Starting Vite dev server for live preview..."
if command -v bun &> /dev/null; then
  nohup bun run dev -- --host > /tmp/vite-dev.log 2>&1 &
else
  nohup npm run dev -- --host > /tmp/vite-dev.log 2>&1 &
fi
echo $! > /tmp/vite-dev.pid

# Wait for the dev server to be ready (up to 30s)
echo "Waiting for dev server to be ready..."
for i in {1..30}; do
  if curl -sf http://localhost:5173 > /dev/null 2>&1; then
    echo "Live preview available at http://localhost:5173"
    break
  fi
  sleep 1
done
