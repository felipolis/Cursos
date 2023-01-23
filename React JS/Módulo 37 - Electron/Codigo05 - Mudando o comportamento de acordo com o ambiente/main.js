// npm install
// npm start

const { app, BrowserWindow } = require('electron')

const isDev = (process.env.NODE_ENV != undefined && process.env.NODE_ENV == 'development ') ? true : false

const isMac = process.platform === 'darwin' ? true : false

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#eee'
    })

    win.loadFile('./src/index.html')

    if (isDev){
        win.webContents.openDevTools()
    }
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
    createWindow()
})