//Cara deklarasi
var name="jesse" //String
var angka = 12 //integer
var todayisFriday = false //boolean

//deklarasi yang tak bernilai
var sesuatu
console.log(sesuatu) //undefined

//deklarasi menggunakan Let + const (JavaScript ES6)
let x = 2 //let merupakan cara deklarasi yang dimana isinya masih dapat diubah
//contoh
if (x == 2) {
    x = 1
    console.log(x)
}
//Berbeda dengan var, const merupakan cara deklarasi yang dimana isinya tidak dapat diubah
const y = 100
//y = 42
console.log(y)

                                    /*STRINGS*/
let sentences = "Javascript" //sebuah string dapat dideklarasikan dengan tanda petik (" ")
//sebuah string juga dimulai dengan iterasi 0
console.log(sentences[0])

//template literals
const firstName = "Jesse"
const lastName = "Simanjuntak"
const sifat = "Gendats"

//template literals berguna untuk menyusun suatu string
//cara penggunaan template literals adalah dengan (`${string}`)
const kalimat = `${firstName} ${lastName} ${sifat}` + " Banget"
console.log(kalimat)

//String properties dan Methods
//.length
let word = "Javascript is awesome"
console.log(word.length) //akan menampilkan panjang dari string tersebut

//.charAt([indeks])
console.log(word.charAt(3))//menampilkan char yang ada pada indeks ke 3

//.concat([string])
let string1 = "Good"
let string2 = "Luck"
let string3 = "Bro"
console.log(string1.concat(string2, string3)) //menampilkan gabungan dari string

//.indexOf([string/karakter])
console.log(word.indexOf("Javascript")) //akan mengembalikan 0 jika ditemukan string tsb
console.log(word.indexOf("i")) //mengembalikan index dari karakter yang ditemukan pertama
console.log(word.indexOf("Jesse")) //mengembalikan -1 jika tidak ditemukan

//.substring([indeks awal], [value sebelum indeks akhir (optional)])
let kalimats = "Vestia Zeta Gendats"
console.log(kalimats.substring(7)) //akan mengambil string dimuali dari index ke berapa
console.log(kalimats.substring(7, 11))

//.toUpperCase()
console.log(kalimats.toUpperCase()) //membuat karakter dalam string menjadi kapital

//.toLowerCase()
let sebuahstring = "BRYAN CHRSTOMPUL"
console.log(sebuahstring.toLowerCase()) //membuat karakter dalam string menjadi kecil

//.trim()
let kataz = " Hai   "
//trim akan mengembalikan string baru yang whitespacenya sudah dihapus
console.log(kataz.trim())

                                /*MENGUBAH TIPE DATA*/
//String([angka/array])
let int = 12;
let real = 3.45;
let arr = [6, 7, 8];
let strInt = String(int);
let strReal = String(real);
let strArr = String(arr);
console.log(strInt); // '12'
console.log(strReal); // '3.45'
console.log(strArr); // '6,7,8'

//.toString()
let number = 21;
console.log(number.toString()); // '21'
let array = [1,2];
console.log(array.toString()); // '1,2'

//Number([String])
let number1 = Number("90"); // number1 = 90
let number2 = Number("1.23"); // number2 = 1.23
let number3 = Number("4 5"); // number3 = NaN

//parseInt([String]) dan parseFloat([String])
let integer = '89';
let ril = '56.7';
let strInt_1 = parseInt(integer); // strInt_1 = 89
let strInt_2 = parseInt(ril); // strInt_2 = 56
let strReal_1 = parseFloat(integer); // strReal_1 = 89
let strReal_2 = parseFloat(ril); // strReal_2 = 56.7

//NOTE : conditional (ifelse, switch case, ternary operator), symbols itu sama kek C/C++ jadi sans