const loadDirBtn = document.getElementById('load-dir');

loadDirBtn.addEventListener('click', async (event) => {
    const directory = await window.api.selectDirectory();
    const loadDirText = document.getElementById('load-dir-text');
    const loadDirWrapper = document.getElementById('load-dir-wrapper');
    const startBtn = document.getElementById('start_action');

    if (directory && directory[0]) {
        loadDirText.textContent = directory[0];
        startBtn.removeAttribute('disabled');
        startBtn.classList.add("active-btn")
        loadDirWrapper.style.color = "var(--desc-font-color)";
    } else {
        loadDirText.textContent = "No directory was loaded.";
        startBtn.disabled = true;
        startBtn.classList.remove("active-btn");
        loadDirWrapper.style.color = "var(--warn-font-color)";
    }
})