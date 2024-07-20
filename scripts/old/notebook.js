
var notebookContent = "";
document.getElementById("toggle-notes").onclick = () => {
    let notebook = document.getElementById("notebook");
    console.log(notebook.style.display);
    if (notebook.style.display === "none" || notebook.style.display === "") notebook.style.display = "block";
    else notebook.style.display = "none";
}
document.getElementById("notebook-area").addEventListener("input", () => {
    notebookContent = document.getElementById("notebook-area").value;
});


