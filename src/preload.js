const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    "api", {
        selectDirectory: async () => {
            return await ipcRenderer.invoke('select-directory');
        }
    }
)