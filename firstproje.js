// İsim ve soyismin ilk harflerini büyük geri kalanlarını küçük yaparak birleştiren kodu yaz.

let firstName = "ezgi";
let lastName = "bergil";
let formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
let formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
console.log(formattedFirstName + ' ' + formattedLastName); 

