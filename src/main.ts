import { app, Menu, ipcMain, BrowserWindow } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'
let win: BrowserWindow = null
app.on('ready', () => { // 启动程序
    createWindow()
})
function createWindow() {
    win = new BrowserWindow({ width: 1024, height: 768 })
    win.loadFile('src/index.html')
    win.webContents.openDevTools() // 生产环境下请注释掉
    // var menu = Menu.buildFromTemplate(menu_bar)
    Menu.setApplicationMenu(null)
    win.on('closed', () => {
        win = null
        console.log('[DEBG]检测到窗口关闭');
        app.quit()
    })
    // 加载 REACT DEVELOPER TOOLS（生产环境下请注释掉）
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`[DEBG]添加插件：${name}`))
        .catch((err) => console.log('[DEBG]添加插件错误：', err))
}