const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  /*
  * 넓이 1920에 높이 1080의 FHD 풀스크린 앱을 실행시킵니다.
  * */
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 730,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Electron 12 이상에서는 기본값이 true입니다
      enableRemoteModule: true, // Electron 10 이상에서 필요할 수 있음
    },
    icon: path.join(__dirname, '/../build/logo512.png'),
  });

  // 메뉴를 완전히 제거
  Menu.setApplicationMenu(null);

  /*
  * ELECTRON_START_URL을 직접 제공할경우 해당 URL을 로드합니다.
  * 만일 URL을 따로 지정하지 않을경우 (프로덕션빌드) React 앱이
  * 빌드되는 build 폴더의 index.html 파일을 로드합니다.
  * */
  const startUrl = process.env.ELECTRON_START_URL ?? url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  /*
  * startUrl에 배정되는 url을 맨 위에서 생성한 BrowserWindow에서 실행시킵니다.
  * */
  mainWindow.loadURL(startUrl);

  /*
   * 개발자 도구 자동 오픈
   */
  mainWindow.webContents.openDevTools();

  ipcMain.handle('open-directory-dialog', async (event) => {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openDirectory']
    });
    return result.filePaths[0]; // 선택된 디렉토리 경로 반환
  });

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});