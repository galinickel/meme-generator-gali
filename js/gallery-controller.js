

function onImgPick(id) { 
    console.log(`the selected picture: ${id}`);
    console.log(gImgs[id]);
    gMeme.selectedImgId = id
    renderEditor(id)
}
function renderEditor(id) { 
    let elMainContainer = document.querySelector('.main-container');
    let elEditorContainer = document.querySelector('.editor-container')
    let elGalleryContainer = document.querySelector('.gallery-grid')
    elMainContainer.classList.add('editor-shown')
    elEditorContainer.classList.add('shown')
    elGalleryContainer.classList.add('shrunken')
    clearCanvas()
    initCanvas()
    
}

function onCloseEditor() { 
    let elMainContainer = document.querySelector('.main-container');
    let elEditorContainer = document.querySelector('.editor-container')
    let elGalleryContainer = document.querySelector('.gallery-grid')
    elMainContainer.classList.remove('editor-shown')
    elEditorContainer.classList.remove('shown')
    elGalleryContainer.classList.remove('shrunken')
}

