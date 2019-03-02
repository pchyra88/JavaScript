//  let typLiczba = 10 + 10;

// // typLiczba = '10 + 10';

// // typLiczba = '10' + 10;

// // typLiczba = `10 + 10 = ${10 + 10}`;   //ES6

// //  console.log(typLiczba);


//  // typ boolean
//  typLiczba = 4 + 4 > 8; // false








// //  console.log(typLiczba);


// //aray   <=======TABLICE =======>

// // let tablica = 'Ola ma kota';

// // tablica[1] = 'Ola ma czarnego kota';
// // tablica[1] = {imie: 'Ola', ma: 'czarnego kota'};



// // tablica.reverse(); //odwócenie kolejności
// tablica.unshift('Ooops'); // dodajemy na początku []
// tablica.shift('Oooops'); //usuwa elementy na początku []


// tablica.push('Ooops'); //dodajemy element na końcu []
// tablica.pop('Ooops'); //usuwamy elemanty na końcu []

// // tablica.splice(1, 3); //modyfikuje orginalną[]
// tablica.slice(1, 3); // wycinai modifikuje orginalną[]
// // console.log(tablica.splice(1, 4));


// tablica.splice(2, 1, 'Daria');

// tablica.sort();


// console.log(tablica.length); // length - sprawdza długość tablicy. 
// console.log(tablica);


let tablicaLiczb = [1, 76, 338, -1, 0]
// tablica.sort();
tablicaLiczb = tablicaLiczb.sort((liczba1, liczba2) => {
   return liczba1 - liczba2;


});


console.log(tablicaLiczb);

// let przykladowyObiekt = {id: 3, imie: 'Paweł'};

// console.log(przykladowyObiekt.id, przykladowyObiekt.imie);
