export interface ElectronApi {
  setTitle: (title: string) => void;
  createWidget: (data: { [name: string]: any }) => void;
  getWidgetList: () => Promise<any>;
  updateWidget: (data: { [name: string]: any }) => void;
  deleteWidget: (data: { [name: string]: any }) => void;
}
export enum ipcApiKeys {
  setTitle = "set-title",
  createWidget = "create-widget",
  getWidgetList = "get-widget-list",
  updateWidget = "update-widget",
  deleteWidget = "delete-widget",
}
