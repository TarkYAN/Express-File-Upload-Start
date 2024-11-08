const uploadFile = async (e) => {
    e.preventDefault();

    const response = await fetch('/upload', {
        method: 'POST',
        body: new FormData(e.target),
    });

    const resObj = await response.json();
    if(resObj.fileId){
        const imgTag = document.getElementById('lastImage');
        imgTag.src = `/retrieve?_id=${resObj.fileId}`;
    }
    return false;
};

const init = () => {
    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', uploadFile);
};
window.onload = init;