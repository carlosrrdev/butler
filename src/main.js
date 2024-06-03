import {Alpine} from "alpinejs";

window.Alpine = Alpine;

Alpine.store('butler', {
  entryPath: "",
  destinationPath: "",

  async selectEntryPath() {
    const directoryPath = await window.electron.openDirectoryDialog()
    if(directoryPath) {
      this.entryPath = directoryPath
    } else {
      this.entryPath = ""
    }
  },

  async selectDestinationPath() {
    const directoryPath = await window.electron.openDirectoryDialog()
    if(directoryPath) {
      this.destinationPath = directoryPath
    } else {
      this.destinationPath = ""
    }
  },

  async openDirectory(path) {
    if(path) {
      await window.electron.openDirectory(path)
    }
  }

})


Alpine.start();

