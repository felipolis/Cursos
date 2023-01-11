// npm install
// npm start

const { app, BrowserWindow, ipcMain, Menu, globalShortcut, shell } = require('electron')
const path = require('path')
const os = require('os')
const fs = require('fs')

let destination = path.join(os.homedir(), 'Desktop', 'AudioRecorder')

const isDev = (process.env.NODE_ENV != undefined && process.env.NODE_ENV == 'development ') ? true : false

const isMac = process.platform === 'darwin' ? true : false

function createWindow() {
    const win = new BrowserWindow({
        width: isDev ? 950 : 500,
        resizable: isDev ? true : false,
        height: 300,
        backgroundColor: '#234',
        show: false,
        icon: path.join(__dirname, 'assets/icon.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    win.loadFile('./src/mainWindow/index.html')

    if (isDev) {
        win.webContents.openDevTools()
    }

    win.once('ready-to-show', () => {
        win.show()
        setTimeout(() => {
            win.webContents.send('cpu_name', os.cpus()[0].model)
        }, 3000)
    })

    const menuTemplate = [
        {
            label: app.name,
            submenu: [
                {
                    label: 'Preferences',
                    click: () => {}
                },
                {
                    label: 'Open destination folder',
                    click: () => { shell.openPath(destination) }
                }

            ]
        },
        { 
            label: 'File',
            submenu: [
                isMac ? { role: 'close' } : { role: 'quit' }
            ]
        }
    ]
    const menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)
}

app.whenReady().then(() => {
    console.log('App is ready')
    createWindow()
})

app.on('will-quit', () => {
    console.log('App will quit')
    globalShortcut.unregisterAll()
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

ipcMain.on('save_buffer', (e, buffer) => {
    const filePath = path.join(destination, `${Date.now()}`)
    fs.writeFileSync(`${filePath}.webm`, buffer)
})