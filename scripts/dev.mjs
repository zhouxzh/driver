// Node 25 provides a non-standard `localStorage` global that breaks
// vuepress-theme-hope's SSR code, so remove it before invoking VuePress.
delete globalThis.localStorage;

// vuepress-theme-hope reads the source directory from process.argv[3].
process.argv[3] = "src";

import { createDev } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

const args = process.argv.slice(2);
const commandOptions = {};
const portIndex = args.indexOf("--port");
if (portIndex !== -1 && args[portIndex + 1]) commandOptions.port = Number(args[portIndex + 1]);
if (args.includes("--clean-temp")) commandOptions.cleanTemp = true;
if (args.includes("--clean-cache")) commandOptions.cleanCache = true;
if (args.includes("--open")) commandOptions.open = true;

await createDev({ bundler: viteBundler() })("src", commandOptions);
