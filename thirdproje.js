// E-posta adresinde @ ve .com içermeyen e-posta adreslerinin geçersiz olduğunu bildiren programı yazalım.

let posta = "ezgibergilgmail.com";

if (posta.includes("@") & posta.endsWith(".com")) {
    console.log("Geçerli e-posta");
}
else {
    console.log("Geçersiz e-posta");
}