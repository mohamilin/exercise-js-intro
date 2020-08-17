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

let userName = prompt("Masukkan Nama User");
let userCity = prompt("Masukkan Asal Negara");
let userCheck = confirm("Apakah data yang diisi sudah benar ? ");
if (userCheck == true) {
  alert("Terima kasih sudah mengisi form");
} else {
  alert("Anda membatalkan pengisian");
}
