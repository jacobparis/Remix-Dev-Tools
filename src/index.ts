// This is your packages entry point, everything exported from here will be accessible to the end-user.
export const test = (): void => {}

import { type Tab } from "./client/tabs/index.js";

export { remixDevTools, defineRdtConfig } from "./vite/plugin.js"
// Type exports
export type { EmbeddedDevToolsProps } from "./client/EmbeddedDevTools.js";
export type { RemixDevToolsProps } from "./client/RemixDevTools.js";
export type RdtPlugin = (...args: any) => Tab;
