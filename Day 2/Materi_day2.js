/*Looping*/
//Buat looping sebenernya ga beda jauh sama c/cpp dll

//for loop
/*for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
} */

//contoh
for(var angka = 1; angka < 10; angka++) {
    console.log('Iterasi ke-' + angka);
} //-> looping dari 1-9

console.log('-------------------------------');

var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}
 
console.log('Jumlah terakhir: ' + jumlah); //mengembalikan angka total

console.log('-------------------------------');

for(var deret = 0; deret < 10; deret += 2) {
    console.log('Iterasi dengan Increment counter 2: ' + deret);
}//-> Incremenet
   
console.log('-------------------------------');
   
for(var deret = 15; deret > 0; deret -= 3) {
    console.log('Iterasi dengan Decrement counter : ' + deret);
}//-> Decrement

console.log('-------------------------------');

//for-loop denan condition
for(var i = 0; i <= 6 ; i++){
    if(i === 3){
      console.log("ini For-Loop dengan Kondisi")
    }else{
      console.log(i)
    }
}

console.log('-------------------------------');

//While loop
/*
while([Kondisi]) { // Kondisi yang menentukan apakah program akan melakukan iterasi. 
// Berupa boolean atau true/false.
  [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
}
*/

//contoh
var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
  flag++; // Mengubah nilai flag dengan menambahkan 1 
}// -> looping 1-9

console.log('-------------------------------');

var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}// -> mengembalikan angka total

console.log(jumlah);

console.log('-------------------------------');

var i = 0;

while( i < 5){

  if(i === 3){

    console.log("Ini While dengan Kondisi")
  }else{

      console.log(i)
  }
  i++;
} //-> while loop dengan condition

                                    /*ARRAY*/
//cara deklarasi dan pemanggilannya :
var array = [2, 5, 1, 3, 4]

console.log( array[0] ) /// outputnya -> 2
console.log( array[2] ) /// outputnya -> 1

console.log('-------------------------------');

//porperti .length
var hobbies = ["coding", "cycling", "climbing", "skateboarding"] 
console.log(hobbies) // [ 'coding', 'cycling', 'climbing', 'skateboarding' ]
console.log(hobbies.length) // 4 
 
console.log(hobbies[0]) // coding
console.log(hobbies[2]) // climbing
// Mengakses elemen terakhir dari array
console.log(hobbies[hobbies.length -1]) // skateboarding

console.log('-------------------------------');

//Metode-metode pada array
//push: menambah 1 nilai ke array ke index paling belakang
var array1 = [1, 2, 3, 4]
array1.push(5)
console.log(array1)

//pop: menghapus 1 nilai dari array index paling belakang
array1.pop()
console.log(array1)

//unshift: menambah 1 nilai ke array index paling depan (index 0)
array1.unshift(0)
console.log(array1)

//shift: menghapus 1 nilai dari array index paling depan (index 0)
array1.shift()
console.log(array1)

//join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
let listangka = array1.join(" terus ")
console.log(listangka)

//sort: mengurutkan elemen di dalam array sesuai alphabet
var array2 = ["Pisang", "Apel", "Tomat", "Semangka"]
let sortedarray2 = array2.sort()
console.log(sortedarray2)

//slice: mengambil beberapa lapis data
let slicearray2 = array2.slice(0, 3)
console.log(slicearray2)

//splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array
//array.splice(index, howmany, item1, ....., itemX)
array2.splice(2, 0, "Lemon", "Kiwi")
console.log(array2)
array2.splice(2, 2)
console.log(array2)

//split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan
//string.split(separator, limit)
var sebuahtext = "Halo gais gimana kabarnya"
const split1 = sebuahtext.split(" ")
console.log(split1)
console.log(split1[1])

const split2 = sebuahtext.split(" ", 3)
console.log(split2)