// npm install
// npm start
// build: npm run dist

const { app, BrowserWindow, ipcMain, Menu, globalShortcut, shell, dialog } = require('electron')
const path = require('path')
const os = require('os')
const fs = require('fs')

const store = require('./Store')

const preferences = new store({
    configName: 'user-preferences',
    defaults: {
        destination: path.join(os.homedir(), 'Desktop')
    }
})

let destination = preferences.get('destination')

const isDev = (process.env.NODE_ENV != undefined && process.env.NODE_ENV == 'development ') ? true : false

const isMac = process.platform === 'darwin' ? true : false

function createPreferenceWindow() {
    const preferenceWindow = new BrowserWindow({
        width: isDev ? 950 : 500,
        resizable: isDev ? true : false,
        height: 150,
        backgroundColor: '#234',
        show: false,
        icon: path.join(__dirname, 'assets/icon.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    preferenceWindow.loadFile('./src/preferences/index.html')

    preferenceWindow.once('ready-to-show', () => {
        preferenceWindow.show()
        if (isDev) {
            preferenceWindow.webContents.openDevTools()
        }
        preferenceWindow.webContents.send("dest-path-update", destination)
    })

}

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
                    click: () => {createPreferenceWindow()}
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

ipcMain.handle("show-dialog", async (e) => {
    const result = await dialog.showOpenDialog({
        properties: ['openDirectory']
    })

    const dirPath = result.filePaths[0]

    preferences.set('destination', dirPath)
    destination = preferences.get('destination')

    return destination
})