// npm install
// npm start

const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#123'
    })
}

app.whenReady().then(() => {
    console.log('App is ready')
    createWindow()
})