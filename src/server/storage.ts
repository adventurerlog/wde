import fs from "fs";
import path from "path";
import { app } from "electron";
const STORAGE_DATA_DEFAULT: Record<string, any> = {
  "main-display": null,
  "widgets": [],
};

const writeStorage = (data: Record<string, any>): void => {
  fs.writeFileSync(
    path.join(app.getAppPath(), "/user-data.json"),
    JSON.stringify(data)
  );
};
const retriveStorage = (): Record<string, any> => {
  const userData = fs.readFileSync(
    path.join(app.getAppPath(), "/user-data.json")
  );
  try {
    const data = JSON.parse(userData.toString()); 
    return {...STORAGE_DATA_DEFAULT,...data};
  } catch (e) {
    return {...STORAGE_DATA_DEFAULT};
  }
};

export const storage = {
  write: writeStorage,
  read: retriveStorage,
};
