// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { ElectronApi, ipcApiKeys } from "./server/api";

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title: string) => ipcRenderer.send(ipcApiKeys.setTitle, title),
  createWidget: (data: {[name:string]: any }) => ipcRenderer.send(ipcApiKeys.createWidget, data),
  getWidgetList: () => {
    ipcRenderer.send(ipcApiKeys.getWidgetList)
    return new Promise((resolve,reject)=>{
        ipcRenderer.on(ipcApiKeys.getWidgetList,(_event,args)=> resolve(args));
    })
},
  updateWidget: (data: {[name:string]: any }) => ipcRenderer.send(ipcApiKeys.updateWidget, data),
  deleteWidget: (data: {[name:string]: any }) => ipcRenderer.send(ipcApiKeys.deleteWidget, data),
} as ElectronApi);
