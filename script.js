document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('text');
    const qrcodeDiv = document.getElementById('qrcode');
  
    function generateQR(text) {
      qrcodeDiv.innerHTML = ''; // Efface le QR code précédent
      const qrcode = new QRCode(qrcodeDiv, {
        text: text,
        width: 160,
        height: 160
      });
    }
  
    // Générer le QR code initial
    generateQR(input.value);
  
    // Mettre à jour le QR code quand l'input change
    input.addEventListener('input', function() {
      generateQR(this.value);
    });
  });