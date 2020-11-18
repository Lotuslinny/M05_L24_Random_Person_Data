/* Addtodom weer een lege array
en dan weer nieuwe data hangen aan de Ul en li

button click, event
array.array.forEach(element => {
  result
}); */


/* xxxxxxxxxxx
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
} xxxxxxxxxxxxx */

/*
Doel:
In: 
  array: gesorteerde array op region van randomPersonData
\Out:
*/
const addListToDom = (array) => {
  //alert(array); //DEBUG: check of de array iets bevat 

  //zet een lege string in de main__list, dit is om oude data niet langer in beeld te hebben zodra ik deze functie aan roep.
  document.getElementById("main__list").innerHTML = "";

  //voor elk element in de array, doe iets
  array.forEach(element => {

    //waarde uit de array halen, en er iets mee doen    
    //console.log(element);
    //stop dit element in de DOM, in de main__list, als een li
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(element);
    document.getElementById("main__list").appendChild(listItem);
    listItem.appendChild(textNode);
  });

};



//SubOpdracht 1 

/*
Sorteer de randomPersonData op region.
in: randomPersonData
out: gesorteerde array op region van randomPersonData
*/
const getRegionData = () => {
  //alert("getRegionData"); // DEBUG laat even weten dat je hier bent. (oftewel: de function wordt nu uitgevoerd)
  return [...new Set(randomPersonData.map(currentValue => currentValue = currentValue.region).sort())];
};

// event maken dat getregiondata aanroept.
/* const regionButton = () => {
  const regionlist = document.getElementById("landenlijst").addEventListener("click", showRegionList)
  return regionlist;
}; */

/*
Doel: Laat de landenlijst zien in alfabetische volgorde
In: 
Out:
*/
const showRegionList = () => {
  //alert("showRegionList"); // DEBUG laat even weten dat je hier bent. (oftewel: de function wordt nu uitgevoerd)
  let a = getRegionData(); //Maak een variabele die de return value van function getRegionData bevat
  //alert(a); //DEBUG staat er iets in de array die ik verwacht uit gerRegionData?
  return addListToDom(a);
}

document.getElementById("landenlijst").addEventListener("click", showRegionList);

//SubOpdracht 2

const addCapricornListToDom = (array) => {
  //alert(array); //DEBUG: check of de array iets bevat 

  //zet een lege string in de main__list, dit is om oude data niet langer in beeld te hebben zodra ik deze functie aan roep.
  document.getElementById("main__list").innerHTML = "";

  //voor elk element in de array, doe iets
  array.forEach(element => {

    //waarde uit de array halen, en er iets mee doen    
    //console.log(element);
    //stop dit element in de DOM, in de main__list, als een li
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(` name: ${element.name} surname: ${element.surname} photo: ${element.photo} `);
    //to = document.createElement("img");
    //image.src = (`photo: ${element.photo}`);
    document.getElementById("main__list").appendChild(listItem);
    listItem.appendChild(textNode);
    //textNode.appendChild(photo);
  });

};
// pak de key: gender en die moet  
const isFemale = person => person.gender === "female";
const isOver30Years = person => person.age > 30;

const isCapricorn = person => {
  const dmy = person.birthday.dmy; //"29/08/1987"
  const dmy_split = dmy.split("/"); //["29", "08", "1987"]
  const day = parseInt(dmy_split[0]); // 29
  const month = parseInt(dmy_split[1]); //8

  //22 december - 19 januari
  if (month === 12 && day >= 22) return true;
  if (month === 1 && day <= 19) return true;
  return false;
};

const findCapricornWomen = () => {
  const women = randomPersonData.filter(isFemale);
  const womenOver30 = women.filter(isOver30Years);
  const capricornWomenOver30 = womenOver30.filter(isCapricorn);
  return capricornWomenOver30;
}

let capricornWomenOver = findCapricornWomen();

const getJustNamePhoto = (person) => {
  let woman = { "name": person.name, "surname": person.surname, "photo": person.photo }
  return woman;
};

/* const makeArrayFromObjectCapricorn = (woman) => {
  //vul array met object key/value
  const capricornArray = [];
  for (const property in woman) {
    //console.log(`${property}: ${inputObject[property]}`);

    let capricornObject = {
      name: property,
      surname: property,
      photo: inputObject[property]
    }
    //The push() method adds one or more elements to the end of an array and returns the new length of the array.
    capricornArray.push(woman);
    alert(capricornArray);
  }
}
// Hier krijg je dus een array die twee nieuwe key-value pairs heeft.
//return capricornArray;

 */
let getResult = () => {
  // capricornWomenOver ===== object
  const result = capricornWomenOver.map(getJustNamePhoto);
  return result;
};

console.log(getResult());

const showCapricornList = () => {
  //alert("showCapricornList"); // DEBUG laat even weten dat je hier bent. (oftewel: de function wordt nu uitgevoerd)
  let b = getResult(); //Maak een variabele die de return value van function getResult bevat
  //alert(b); //DEBUG staat er iets in de array die ik verwacht uit getResult?
  return addCapricornListToDom(b);
}

document.getElementById("steenbokvrouwen").addEventListener("click", showCapricornList);


//Subopdracht: meeste mensen - 3 punten
const addFrequencyListToDom = (array) => {
  //alert(array); //DEBUG: check of de array iets bevat 

  //zet een lege string in de main__list, dit is om oude data niet langer in beeld te hebben zodra ik deze functie aan roep.
  document.getElementById("main__list").innerHTML = "";

  //voor elk element in de array, doe iets
  array.forEach(element => {

    //waarde uit de array halen, en er iets mee doen    
    //console.log(element);
    //stop dit element in de DOM, in de main__list, als een li
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(`${element.name} ${element.population}`);
    document.getElementById("main__list").appendChild(listItem);
    listItem.appendChild(textNode);
  });

};
/* Maak een lijst van alle landen die voorkomen in de data.
 
Achter elk land moet komen te staan hoeveel van de mensen in de lijst in dat land wonen.
 
De lijst moet zo gesorteerd zijn dat de landen met de meeste mensen bovenaan staan. */
//1 maak een functie die een array pakt om een nieuwe array te maken van alleen de regions.
const getRegion = function (xyzarray) {
  let regionlist = xyzarray.map(person => person = person.region);
  return regionlist;
};
// console.log(getRegion(randomPersonData));
// console.log(getRegion(listofpeopleArray));
// 2 kijk hoe vaak een specifiek land in de brondata voorkomt.
// 3 Hou per land bij hoe vaak het voorkomt. Maak een object met een key: country en value: frequency.
//4 Maak er een stuk tekst van.
// 5 zet op de pagina.

const getCountryListWithFrequency = () => {
  const countriesObject = {};
  randomPersonData.forEach(person => {
    const countries = person.region;
    if (!(countries in countriesObject)) {
      // voeg country toe aan het object
      countriesObject[countries] = 0;
    }  // verhoog de frenquency, het aantal mensen met 1.

    countriesObject[countries] = countriesObject[countries] + 1
  });
  // countriesObject[countries]++; mag ook
  return countriesObject;

}
const outputObject = getCountryListWithFrequency();
//console.log(output);
// zet het in een variabele

const makeArrayFromObject = (inputObject) => {
  //vul array met object key/value
  const countriesArray = [];
  for (const property in inputObject) {
    //console.log(`${ property }: ${ inputObject[property]}`);
    let countriesObject = {
      name: property,
      population: inputObject[property]
    }
    //The push() method adds one or more elements to the end of an array and returns the new length of the array.
    countriesArray.push(countriesObject);
  }
  // Hier krijg je dus een array die twee nieuwe key-value pairs heeft.
  return countriesArray;
}
// dus het object = argument(outputObject) stop je in de parameter van de functie en daaruit krijg je de array(outputArray).
let outputArray = makeArrayFromObject(outputObject);
// hier wil je dat de value van de property population descending is.
//De array stop je in de constante, dus hier krijg je een function expression, waarbij je gebruikt maakt van de array method .sort.
//sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, 
//built upon converting the elements into strings.
const descendArray = (inputArray) => {
  inputArray.sort((first, second) => {
    // hier check je elk element van de array met de vorige. en basis daarvan plaats je het element op de plaat van de index -1 of 1, anders 0.
    if (first.population > second.population) return -1
    if (first.population < second.population) return 1
    return 0;
  })
  //Hier geeft je functie de waarde terug.
  return inputArray;
}
//De outputArray = makeArrayFromObject(outputObject) stop
//je als argument in de functie descendArray en check je welke waarde je terugkrijgt... met console.log.
console.log(descendArray(outputArray));

const showCountryFrequencyList = () => {
  //alert("showCapricornList"); // DEBUG laat even weten dat je hier bent. (oftewel: de function wordt nu uitgevoerd)
  let b = outputArray; //Maak een variabele die de return value van function getResult bevat
  //alert(b); //DEBUG staat er iets in de array die ik verwacht uit getResult?
  return addFrequencyListToDom(b);
}

document.getElementById("meeste_mensen").addEventListener("click", showCountryFrequencyList);
