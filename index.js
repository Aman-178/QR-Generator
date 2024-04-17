const inputfield=document.getElementById('Inputfield');
const qrimagebox=document.getElementById('imgbox');
const qrimage=document.getElementById('qr-image');

function genrateqr() {
    if (inputfield.value.length > 0) {
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputfield.value;
        qrimagebox.classList.add('showimage');
        inputfield.classList.remove('error'); // Remove error class if it was added previously
    } else {
        inputfield.classList.add('error'); // Add error class to input field
        setTimeout(() => {
            inputfield.classList.remove('error'); // Remove error class after 1 second
        }, 1000);
    }
}

