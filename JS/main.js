document.querySelector("button").addEventListener("click", getQr);

function getQr() {
  const website = document.querySelector("input[name='website']").value;
  const height = document.querySelector("input[name='height']").value;
  const width = document.querySelector("input[name='width']").value;

  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=${height}x${width}&data=${website}`;

  fetch(qrURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.blob();
    })
    .then((blob) => {
      const qrImageURL = URL.createObjectURL(blob);
      const qrImageElement = document.createElement("img");
      qrImageElement.src = qrImageURL;

      // Replace the existing image with the QR code image
      const existingImage = document.querySelector("img");
      existingImage.parentNode.replaceChild(qrImageElement, existingImage);
    })
    .catch((error) => console.error(`Error fetching QR code: ${error}`));
}
