function generateQR() {
    let text = document.getElementById("text").value;
    let qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";
    
    if (text.trim() !== "") {
        new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200
        });
    } else {
        alert("Masukkan teks woii");
    }
}