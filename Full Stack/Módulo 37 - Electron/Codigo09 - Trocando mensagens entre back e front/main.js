// npm install
// npm start

const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const os = require('os')

const isDev = (process.env.NODE_ENV != undefined && process.env.NODE_ENV == 'development ') ? true : false

const isMac = process.platform === 'darwin' ? true : false

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#eee',
        show: false,
        icon: path.join(__dirname, 'assets/icons/icon.png'),
        webPreferences: {
            nodeIntegration: true, // Permite o uso do node no front-end
            contextIsolation: false,
        }
    })

    win.loadFile('./src/index.html')

    if (isDev) {
        win.webContents.openDevTools()
    }

    win.once('ready-to-show', () => {
        win.show()
        setTimeout(() => {
            win.webContents.send('cpu_name', os.cpus()[0].model)
        }, 3000)
    })
}

app.whenReady().then(() => {
    console.log('App is ready')
    createWindow()
})

app.on('window-all-closed', () => {
    console.log('Window all closed')
    if (!isMac) {
        app.quit()
    }
})

app.on('activate', () => {
    console.log('App activated')
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

ipcMain.on('open_new_window', () => {
    console.log('Open new window')
    createWindow()
})