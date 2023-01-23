// npm install
// npm start

const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#eee'
    })

    win.loadFile('./src/index.html')    // Carrega o arquivo index.html

    win.webContents.openDevTools()      // Abre o DevTools
}

app.whenReady().then(() => {
    console.log('App is ready')
    createWindow()
})