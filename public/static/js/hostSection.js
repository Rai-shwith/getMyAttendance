
// QR Code generation
const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: document.getElementById("attendanceLink").dataset.link,
    width: 128,
    height: 128,
    colorDark: "#6200ea", // QR code color
    colorLight: "#ffffff", // Background color
    correctLevel: QRCode.CorrectLevel.H,
});

const linkField = document.getElementById("attendanceLink");
// Copy link to clipboard
document.getElementById("copyLink").addEventListener("click", () => {
    if (navigator && navigator.clipboard) {
      // Use the modern clipboard API
      navigator.clipboard.writeText(linkField.dataset.link)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
        });
    } else {
      // Fallback for older browsers
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = linkField.dataset.link;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextarea);
      alert("Link copied to clipboard.");
    }
  });

