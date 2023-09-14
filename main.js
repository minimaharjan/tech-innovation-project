// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

const isMac = process.platform === 'darwin';

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    show: false
  });

  if(isDev) {
    // Development URL
    mainWindow.loadURL('http://localhost:3000/')
  } else {
    mainWindow.loadFile("react-app/build/index.html")
  }
  
  mainWindow.maximize()
  mainWindow.show()

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  /* TODO: Optimize this solution */
  // Wait for 4 seconds to load the React Application
  setTimeout(() => {
    createWindow()
  }, 4000);

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
.catch(console.error);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (!isMac) app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.