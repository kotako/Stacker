const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  let win = new BrowserWindow({ width: 800, height: 600 });
  if (process.env.NODE_ENV == 'production') {
    win.loadURL(url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    // 開発中はHot Reloadさせる
    console.log("load localhost:3000");
    win.loadURL('http://localhost:3000');
  }

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
