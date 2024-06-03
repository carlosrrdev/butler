const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electron', {
  openDirectoryDialog: () => ipcRenderer.invoke('open-directory-dialog'),
  openDirectory: (directoryPath) => ipcRenderer.invoke('open-directory', directoryPath)
})