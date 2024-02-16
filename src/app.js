const mainContainer = document.getElementById('main-container')
const welcomeContainer = document.getElementById('main-welcome')
const pdfToDirBtn = document.getElementById('pdf_to_dir')

pdfToDirBtn.addEventListener('click', async () => {
    const res = await fetch("./views/pdf_to_dir.html")
    const resText = res.text()
    welcomeContainer.style.display = 'none';
    mainContainer.innerHTML = await resText;
    const loadDirBtn = document.getElementById('load-dir-btn');
    loadDirBtn.addEventListener('click', async () => {
        const loadDirText = document.getElementById('load-dir-text');
        const loadDirWrapper = document.getElementById('load-dir-wrapper')
        const startBtn = document.getElementById('start_pdf_to_dir');
        const directory = await window.api.selectDirectory();
        if (directory && directory[0]) {
            loadDirText.textContent = directory[0];
            startBtn.removeAttribute('disabled');
            startBtn.classList.add("active-task-btn")
            loadDirWrapper.style.color = "var(--body-font-clr)";
        } else {
            loadDirText.textContent = "No directory was loaded.";
            startBtn.disabled = true;
            startBtn.classList.remove("active-task-btn");
            loadDirWrapper.style.color = "var(--warn-text-clr)";
        }
    })
})