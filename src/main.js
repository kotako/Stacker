const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');
const url = require('url');

let win = null;
let tray = null;

function createWindow() {
  win = new BrowserWindow({
    width: 200,
    height: 300,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: falses
  });

  // Macのフルスクリーン上にも表示できるようにする
  app.dock.hide();
  win.setAlwaysOnTop(true, 'floating');
  win.setVisibleOnAllWorkspaces(true);

  // 開発中はHot Reloadさせる
  if (process.env.NODE_ENV == 'production') {
    win.loadURL(url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL('http://localhost:3000');
  }
  win.on('blur', () => win.hide());
  win.on('closed', () => win = null);
}

function createTray() {
  tray = new Tray(path.join(__dirname, '/../public/trayicon/icon.png'));
  tray.on('click', () => {
    win.isVisible() ? win.hide() : showWindow()
  });
}

function showWindow() {
  const position = getWindowPosition();
  win.setPosition(position.x, position.y, false);
  win.show();
}

function getWindowPosition() {
  const windowBounds = win.getBounds();
  const trayBounds = tray.getBounds();
  return {
    x: Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width /2)),
    y: Math.round(trayBounds.y + trayBounds.height + 4)
  };
}

app.on('ready', () => {
  createWindow();
  createTray();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
