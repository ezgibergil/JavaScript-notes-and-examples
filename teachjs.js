/*function testVar() {
    if (true) {
        var message = "Var ile tanımlandım!";
    }
    console.log(message);
}
testVar(); 

var değişkeni global let değişkenleri lokal değişkenlerdir.

------------------------------------------------

for (let i=0; i<3; i++){
    console.log("Döngü içindeki i;",i);
}
console.log("Döngü dışındaki i;",i);

------------------------------------------------


function testLet() {
    if (true) {
        let message = "Let ile tanımlandım!";
        console.log(message);
    }
    console.log(message); //Burada hata mesajı alıyoruz çünkü let değişkeni lokal olduğu için fonksiyondaki if bloğu dışında erişemiyoruz.
    
}
testLet(); 

--------------------------------------------------

const colors = ["red","green","blue"];
colors.push("yellow");
console.log(colors);
colors=["yellow"]    //Burada colors dizisini tamamen değiştirmeye çalıştırdığımız için hata mesajı alıyoruz. Ama push ile ekleme yapabiliriz.


-------------------------------------------------


let mesaj = "JavaScript";
console.log(mesaj.length);  yazılan string değerin karakter sayısını görmek için length komutu kullanılır.

-------------------------------------------------

let mesaj = "JavaScript";
console.log(mesaj.charAt(0));
console.log(mesaj.charAt(4));      charAt() komutu string değişkendeki konuma denk gelen karakteri gösterir.

------------------------------------------------- 

let mesaj = "Merhaba";
console.log(mesaj.toUpperCase());
console.log(mesaj.toLowerCase());

toUpperCase() komutu bütün harfleri büyük yapar.  Çıktı: MERHABA
toLowerCase() komutu bütün harfleri küçük yapar.   Çıktı: merhaba

------------------------------------------------- 

let mesaj = "Merhaba Dünya";
console.log(mesaj.indexOf("a"));    karakterin baştan konumunu gösterir. Çıktı: 4
console.log(mesaj.lastIndexOf("a"));    karakterin sondan konumunu gösterir. Çıktı : 12

------------------------------------------------- 

let mesaj = "JavaScript";
console.log(mesaj.slice(0,4));  0. elemandan alıp 4. karakteri almadan çıktı verir. --> Çıktı: Java
console.log(mesaj.slice(4));    4. karakterden başlayıp sonuna kadar olan karakterleri verir. --> Çıktı: Script

------------------------------------------------- 

let mesaj = "JavaScript";
console.log(mesaj.substring(4,10));   4 den başla 10 a kadar al. --> Çıktı: Script
console.log(mesaj.substr(4,3));    Nerden başlayıp kaç adım olacağını veren komut. --> Çıktı: Scr

------------------------------------------------- 

let mesaj = "Merhaba JavaScript";
console.log(mesaj.replace("JavaScript","Dünya"));   String değerleri değiştirmek için replace kullanılır. -->Çıktı: Merhaba Dünya

------------------------------------------------- 

let mesaj = "JavaScript öğreniyorum";
console.log(mesaj.includes("JavaScript"));    Çıktı: true
console.log(mesaj.includes("Python"));        Çıktı: false

includes() komutu o değerin cümlenin içinde olup olmadığına bakar.

------------------------------------------------- 

let mesaj = "JavaScript öğreniyorum";
console.log(mesaj.startsWith("Java"));   Çıktı:true  -- Bu karakterler ile başlayıp başlamadığına bakar.
console.log(mesaj.endsWith("yorum"));    Çıktı:true  -- Bu karakterler ile bitip bitmediğine bakar.

------------------------------------------------- 

let mesaj = "Merhaba, Dünya, JavaScript";
console.log(mesaj.split(","));    split() verilen karaktere göre parçalama yapar. --> Çıktı : [Merhaba, Dünya, JavaScript]

*/




