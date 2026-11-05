#!/usr/bin/env node
/**
 * Reliable local dev: remove stale .next before starting.
 * Stale caches cause layout.css 404 and "no CSS" — often after `npm run build`
 * ran while another dev server was still using .next.
 */
import { rmSync, existsSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = path.join(root, ".next");

if (existsSync(nextDir)) {
  try {
    rmSync(nextDir, { recursive: true, force: true });
    console.log("[dev] Cleared .next for a fresh dev session (prevents missing CSS).");
  } catch (err) {
    console.warn("[dev] Could not remove .next — stop other Next processes and retry.", err);
  }
}

const child = spawn("next", ["dev"], {
  cwd: root,
  stdio: "inherit",
  shell: process.platform === "win32",
  env: process.env,
});

child.on("exit", (code) => process.exit(code ?? 0));
