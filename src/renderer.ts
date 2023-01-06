/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./index.css";
import { defineComponents } from "./components";
import { ElectronApi } from "./server/api";

declare const electronAPI: ElectronApi;

defineComponents();

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);
console.log(electronAPI);
const clickHandle = (query: string, cb: () => void) => {
  document.querySelector(query).addEventListener("click", cb);
};
clickHandle(".get-list", () => {
  electronAPI.getWidgetList().then((widgets: any) => {
    console.log("widgets:::", widgets);
  });
});
clickHandle(".create", () => {
  electronAPI.createWidget({ id: 22, data: "test" });
});
clickHandle(".update", () => {
  electronAPI.updateWidget({ id: 22, data: "test2" });
});
clickHandle(".delete", () => {
  electronAPI.deleteWidget({ id: 22 });
});
electronAPI.setTitle("this-is-a-title");
// setInterval(()=>{

// },1000)
