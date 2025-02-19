document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("text");
  const qrcodeDiv = document.getElementById("qrcode");
  const downloadBtn = document.getElementById("downloadBtn");

  function generateQR(text) {
    qrcodeDiv.innerHTML = ""; // Efface le QR code précédent
    try {
      const qrcode = new QRCode(qrcodeDiv, {
        text: text,
        width: 160,
        height: 160,
        correctLevel: QRCode.CorrectLevel.H,
      });
      downloadBtn.disabled = false;
    } catch (error) {
      downloadBtn.disabled = true;
    }
  }

  // Générer le QR code initial
  generateQR(input.value);

  // Mettre à jour le QR code quand l'input change
  input.addEventListener("input", function () {
    generateQR(this.value);
  });

  // Gestion du téléchargement
  downloadBtn.addEventListener("click", function () {
    const canvas = qrcodeDiv.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  });
});
