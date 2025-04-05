document.addEventListener("click", () => {
    
})
 function genrteQrcode() {
    let qrinput = document.getElementById("qrinput").value;
     let qrcountainer = document.getElementById("qrcountainer");
     let para = document.getElementById("paragraph");
         qrcountainer.style.display = "none";
    if(qrinput === "") {
        para.innerText = "Please enter a text to generate QR code.";
        return;
     }
     document.getElementById("qrcode").innerHTML = "";
     let qr =new QRCode (document.getElementById("qrcode"), {
         text: qrinput,
         width: 150,
         height: 150,
     });
     setTimeout(() => {
         qrcountainer.style.display = "block";
         para.innerText = ("QR code generated successfully.");
     }, 100);
}