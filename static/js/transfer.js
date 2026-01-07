const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

// Click = ouvrir explorateur
dropZone.addEventListener("click", () => fileInput.click());

// Drag over
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
});

// Drag leave
dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
});

// Drop fichiers
dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    handleFiles(e.dataTransfer.files);
});

// Input files
fileInput.addEventListener("change", () => {
    handleFiles(fileInput.files);
});

// Affichage fichiers
function handleFiles(files) {
    for (let file of files) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";

        li.innerHTML = `
            <span>
                <i class="bi bi-file-earmark me-2"></i>${file.name}
            </span>
            <span class="text-muted">${(file.size / 1024 / 1024).toFixed(2)} MB</span>
        `;

        fileList.appendChild(li);
    }
}
