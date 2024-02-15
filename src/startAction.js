const startBtn = document.getElementById('start_action')
const confirmDialog = document.getElementById('confirm');

startBtn.addEventListener('click', () => {
    confirmDialog.showModal()
})