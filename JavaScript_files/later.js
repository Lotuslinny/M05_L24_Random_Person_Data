/* //SubOpdracht 3
//ik wil hier de waardes van de property credit_card.

//ik stop een functie in een constante.
const isExpirationDate = person => {
 //ik maak een nieuwe variabele aan met de waarde van expiration date 05/21.
 let expiration = person.credit_card.expiration;
 //Ik wil de waarde van expiration .split in twee strings.
 const expiration_split = expiration.split("/");
 // de expiration strings moeten gezien worden als integers en ik pak de tweede
 //parameter, het jaartal en die moet <= 21 zijn.
 const year = parseInt(expiration_split[1]); //y
 // verloopdatum month is januari en year is 2021
 if (year <= 21) return true;
 return false;
};

isExpirationDate();
console.log()

/* let now = new Date()
alert(now); // shows current date/time
/* The year must have 4 digits: 2013 is okay, 98 is not.
The month count starts with 0 (Jan), up to 11 (Dec).
The date parameter is actually the day of month, if absent then 1 is assumed.
If hours/minutes/seconds/ms is absent, they are assumed to be equal 0. */

//new Date().getFullYear() 

//const dmy_split = dmy.split("/"); //["29", "08", "1987"]
//Ik wil de waarde van expiration en dan wil ik deze .split in twee strings.
