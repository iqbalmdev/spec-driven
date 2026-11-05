#!/usr/bin/env node
/**
 * Prevent `next build` from corrupting an active dev server's .next folder.
 */
import { execSync } from "node:child_process";

if (process.env.SKIP_DEV_GUARD === "1") {
  process.exit(0);
}

function portInUse(port) {
  try {
    const out = execSync(`lsof -ti :${port} 2>/dev/null || true`, { encoding: "utf8" }).trim();
    return out.length > 0;
  } catch {
    return false;
  }
}

for (const port of [3000, 3001]) {
  if (portInUse(port)) {
    console.error(
      `\n[prebuild] Port ${port} is in use (likely \`npm run dev\`). Stop the dev server before \`npm run build\`.\n` +
        `Running build while dev is active corrupts .next and breaks CSS (layout.css 404).\n` +
        `Fix: Ctrl+C in the dev terminal, then build — or only use \`npm run dev\` (it clears .next on start).\n`
    );
    process.exit(1);
  }
}
