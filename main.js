const { app, BrowserWindow } = require("electron");

function createWindow() {
  const ventana = new BrowserWindow({
    width: 475,
    height: 475,
    webPreferences: {
      nodeIntegration: true,

      contextIsolation: false,
    },
  });
  ventana.loadFile("index.html");
}

app.whenReady().then(createWindow);