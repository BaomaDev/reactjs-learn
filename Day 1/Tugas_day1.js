//Soal 1. Buatlah dua buah string
//Soal 2. Buatlah string lain dan gabungkan pada soal 1 tadi
//Soal 3. Gabugnkanlah dengan menggunakan metode template literal
//Soal 4. Diketahui sebuah string panjangpersegi adalah "8" dan luaspersegi adalah "2", Carilah keliling tersebut (dalam integer)
//Soal 5. Dari string yang telah dibuat tadi, uraikan kata2nya menggunakan substring dan slice

//Soal 1.
let string1 = "Hallo"
let string2 = "Namaku"

//Soal 2.
let string3 = "Jesse"

//Penggabungan cara 1
console.log(string1 + string2 + string3)
//Penggabungan cara 2
console.log(string1.concat(string2, string3))

//Saol 3.
console.log(`${string1} ${string2} ${string3}`)

//Soal 4.
const panjangpersegi = "8"
const lebarpersegi = "2"

//Cara 1
console.log(4 * (Number(panjangpersegi) * Number(lebarpersegi)))

//Cara 2
console.log(4 * (parseInt(panjangpersegi) * parseInt(lebarpersegi)))

//Soal 5.
let gabunganString = `${string1} ${string2} ${string3}`

//Metode substr
console.log(gabunganString.substring(0, 6))
console.log(gabunganString.substring(6, 13))
console.log(gabunganString.substring(13, 18))

//Metode slice
console.log(gabunganString.slice(0, 6))
console.log(gabunganString.slice(6, 13))
console.log(gabunganString.slice(13, 18))