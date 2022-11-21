var import_electron = require("electron");
var import_os = require("os");
var import_path = require("path");
process.env.DIST_ELECTRON = (0, import_path.join)(__dirname, "..");
process.env.DIST = (0, import_path.join)(process.env.DIST_ELECTRON, "../dist");
process.env.PUBLIC = import_electron.app.isPackaged ? process.env.DIST : (0, import_path.join)(process.env.DIST_ELECTRON, "../public");
if ((0, import_os.release)().startsWith("6.1"))
  import_electron.app.disableHardwareAcceleration();
if (process.platform === "win32")
  import_electron.app.setAppUserModelId(import_electron.app.getName());
if (!import_electron.app.requestSingleInstanceLock()) {
  import_electron.app.quit();
  process.exit(0);
}
let win = null;
const preload = (0, import_path.join)(__dirname, "../preload/index.js");
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = (0, import_path.join)(process.env.DIST, "index.html");
async function createWindow() {
  win = new import_electron.BrowserWindow({
    title: "Main window",
    icon: (0, import_path.join)(process.env.PUBLIC, "favicon.ico"),
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(url);
    win.webContents.openDevTools();
  } else {
    win.loadFile(indexHtml);
  }
  win.webContents.setWindowOpenHandler(({ url: url2 }) => {
    if (url2.startsWith("https:"))
      import_electron.shell.openExternal(url2);
    return { action: "deny" };
  });
  let request = import_electron.net.request("https://gitee.com/junmoxiao1122/data/raw/master/demo/list.json");
  request.on("response", (response) => {
    console.log(JSON.stringify(response.statusCode));
    console.log(JSON.stringify(response.headers));
    response.on("data", (chunk) => {
      console.log(chunk.toString(), 11111111);
      win.webContents.on("did-finish-load", () => {
        win == null ? void 0 : win.webContents.send("main-process", new Date().toLocaleString());
      });
    });
  });
  request.end();
}
import_electron.app.whenReady().then(createWindow);
import_electron.app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin")
    import_electron.app.quit();
});
import_electron.app.on("second-instance", () => {
  if (win) {
    if (win.isMinimized())
      win.restore();
    win.focus();
  }
});
import_electron.app.on("activate", () => {
  const allWindows = import_electron.BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});
import_electron.ipcMain.handle("open-win", (event, arg) => {
  const childWindow = new import_electron.BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  if (import_electron.app.isPackaged) {
    childWindow.loadFile(indexHtml, { hash: arg });
  } else {
    childWindow.loadURL(`${url}#${arg}`);
  }
});
