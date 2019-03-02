let uzytkownicy = [
    {
        imie: 'Kaja',
        nazwisko: 'Nowak'
    }, {
        imie: 'Karol',
        nazwisko: 'Kowalski'
    }, {
        imie: 'Mariusz',
        nazwisko: 'Witowski'
    }
];

// console.log(uzytkownicy);


// pętla for

// for (let index = 0; index < uzytkownicy.length; index++) {
// console.log(uzytkownicy [index]. imie);
// }


// pętla while

// let numer = 10 

// while (numer >= 0) {
// console.log(numer);
// numer--;
// }

// pętla forEach

uzytkownicy.forEach((element, index) => {
    // console.log(element, index);
    // element.kolorOczu = 'niebieski';
    if (element.imie === 'Kaja') {
        element.kolorOczu = 'niebieski';
    }else if (element.imie === 'Karol') {
        element.kolorOczu = 'piwny';
    }else if (element.imie === 'Mariusz') {
        element.kolorOczu = 'zielony';
    }
}); 


//pętla d0..while ()

let numer2 = 5;

do {
console.log(numer2);
}while(numer2-- > 3);


console.log(uzytkownicy);