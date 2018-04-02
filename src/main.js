const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  let win = new BrowserWindow({ width: 800, height: 600 });
  // Macのフルスクリーン上にも表示できるようにする
  app.dock.hide();
  win.setAlwaysOnTop(true, 'floating');
  win.setVisibleOnAllWorkspaces(true);
  win.setFullScreenable(false);

  if (process.env.NODE_ENV == 'production') {
    win.loadURL(url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    // 開発中はHot Reloadさせる
    win.loadURL('http://localhost:3000');
  }

  win.on('closed', () => win = null);

  // Create Tray
  let tray = new Tray(path.join(__dirname, '/../public/trayicon/icon.png'));
  tray.on('click', () => {
    win.isVisible() ? win.hide() : win.show()
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
