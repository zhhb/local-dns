const {app, BrowserWindow} = require('electron');
const os = require('os');
const dnsd = require('dnsd');
const _ = require('lodash');

var win = null;

var winConf = {
  width: 800,
  height: 600,
  show: false,
  //frame: false,
  //titleBarStyle: 'hidden-inset',
}

if (os.platform() === 'darwin') {
  winConf['frame'] = false;
  winConf['titleBarStyle'] = 'hidden-inset';
}

app.on('ready', () => {
  if (!win) {
    win = new BrowserWindow(winConf);
    win.once('ready-to-show', () => {
      win.show();
    });
    win.loadURL('https://www.baidu.com');
  }
});
app.on('window-all-closed', () => { });
app.on('before-quit', () => { });
app.on('quit', () => {
  if (win) {
    win.close();
  }
})


