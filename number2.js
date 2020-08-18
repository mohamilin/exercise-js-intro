/*
CHALLENGE
2. Membuat interaksi kepada user
Prompt data berikut:
    Nama user
    Asal Negara
Confirm data user. Apakah data yang diisi sudah benar?
Alert “Terima kasih sudah mengisi form”
*/

//SOLVE

let userName = String(prompt(" Sebutkan Nama Anda !"));
let userCity = String(prompt("Sebutkan Asal Negara !"));
if(!Number(userName) && !Number(userCity)) {
    confirm("Apakah data yang diisi sudah benar?");
    alert("Terima kasih sudah mengisi form");
} else {
   alert("Nama atau Negara tidak sesuai dengan karakter");
}
