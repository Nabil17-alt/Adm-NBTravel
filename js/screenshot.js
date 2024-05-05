const downloadButton = document.getElementById("downloadButton");
const screenshotArea = document.getElementById("screenshotArea");

downloadButton.addEventListener("click", function () {
  html2canvas(screenshotArea).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "Transaksi terkini.png";
    link.click();
  });
});
