/*
CHALLENGE 1 :
Console log data diri :
Nama
Asal daerah
Tanggal lahir
Umur
Posisi pekerjaan
*/

// SOLVE :


console.log("amilin");
console.log("surabaya");
console.log("26-10-1991");
console.log(28);
console.log("teacher");

/*
CHALLENGE 2 :
Membuat interaksi kepada user
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

/*
CHALLENGE 3 :
Berikan single comments pada setiap baris data diri yang ada pada soal nomor 1
*/
//memberikan single comment

// let name = "amilin";
// let city = "surabaya";
// let dob = "26-10-1991";
// let age = "28";
// let positionJob = "teacher";

// console.log(name);
// console.log(city);
// console.log(dob);
// console.log(age);
// console.log(positionJob);

/*
CHALLENGE 4:
Berikan multiple comments pada fitur soal nomor 2
*/

//SOLVE

//multiple comment

/*

prompt("Masukkan Nama User");
prompt("Masukkan Asal Negara");
confirm("Apakah data yang diisi sudah benar ? ");
alert("Terima kasih sudah mengisi form");

*/

/*
CHALLENGE 5:
Buat variabel untuk menampung data diri yang telah dibuat pada nomor 1.
Lalu panggil dan tampilkan dengan menggunakan console log
*/

//SOLVE

let name = "amilin";
let city = "surabaya";
let dob = "26-10-1991";
let age = "28";
let positionJob = "teacher";

console.log(name);
console.log(city);
console.log(dob);
console.log(age);
console.log(positionJob);

/*
  CHALLENGE 6 :
Lakukan operasi matematika berikut. Simpan hasil pada sebuah variabel untuk masing-masing operasi.
25 + 10
100 * 2
99 / 2
99 % 2

*/

//SOLVE

//25 + 10
let x = 25;
let y = 10;

console.log(x + y);
//====================

//100 * 2
let p = 100;
let q = 2;

console.log(p * q);

//====================

// 99 / 2
let a = 99;
let b = 2;

console.log(a / b);

//====================

// 99 % 2
let numOne = 99;
let numTwo = 2;

console.log(numOne % numTwo);
