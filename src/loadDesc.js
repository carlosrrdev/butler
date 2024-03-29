const actionsForm = document.getElementById('actions')
const descText = document.getElementById('description-text');

const pdfToDirText = `
<p>
    This action will go through all pdf files in the given directory. Using the pdf filename, it
    will then create new directories. Finally, it will move each pdf file into it's corresponding
    directory.
</p>
<p style="margin: 1rem 0">Example:</p>
<div style="display: flex;column-gap: 1rem">
    <div style="display:flex;align-items: center;column-gap: 6px">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <p>rodriguez_carlos_05081990</p>
    </div>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    </div>
    <div style="display:flex;align-items: center;column-gap: 6px">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>
        <p>RODRIGUEZ_CARLOS_05081990</p>
    </div>
</div>
<p style="color: var(--warn-font-color)">Important note: The filename of the PDF determines the generated directory name!</p>
<p style="color: var(--warn-font-color)">PDF filename MUST follow a specific naming format: lastname_firstname_dateofbirth</p>

`

actionsForm.addEventListener('change', (e) => {
    const el = e.target
    switch(el.dataset.action) {
        case "pdf_to_dir":
            descText.innerHTML = pdfToDirText;
            break;
        case "test_1":
            descText.innerText = "test 1"
            break;
        case "test_2":
            descText.innerText = "test 2"
            break;
        default:
            descText.innerText = ""
    }
})