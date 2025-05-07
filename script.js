let currentColor = "black"; // warna QR awal

function generateQR() {
    let text = document.getElementById("text").value;
    let qrContainer = document.getElementById("qrcode");
    let box = document.querySelector(".box");
    qrContainer.innerHTML = ""; // reset sebelumnya

    if (text.trim() !== "") {
        // atur warna latar belakang box agar QR terlihat
        box.style.backgroundColor = (currentColor === "white") ? "#222222" : "#ffffff";

        new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200,
            colorDark: currentColor,
            colorLight: (currentColor === "white") ? "#222222" : "#ffffff"
        });
    } else {
        alert("Masukkan teks woii");
    }
}

function switchColor() {
    currentColor = (currentColor === "black") ? "white" : "black";
    generateQR(); // regen QR dengan warna baru dan latar yang sesuai
}

function downloadQR() {
    let canvas = document.querySelector('#qrcode canvas');
    if (!canvas) {
        alert("Generate QR Code dulu sebelum download!");
        return;
    }

    // Buat link download dari canvas
    let imageURL = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.href = imageURL;
    link.download = "qrcode.png";
    link.click();
}
