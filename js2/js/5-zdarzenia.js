let header = document.querySelector('header');
let parFirst = document.querySelector('#parFirst');
let parSecond = document.querySelector('.parSecond');


colorChange = () => {
header.style.color = 'red';
}

onDblClick = () => {
    parSecond.style.backgroundColor = 'yellow';
}

parSecond.ondblclick = onDblClick; // WYWOŁUJEMY funkcje bez nawiasów ponieważ dopiero po kliknięciu funkcja zostanie wykonana


najechanieMyszka = () => {
    parFirst.style.backgroundColor = 'blue';
}

parFirst.addEventListener('mouseover', najechanieMyszka);

// parFirst.removeEventListener('mouseover', najechanieMyszka);

parFirst.classList.toggle('toggle');

parFirst.addEventListener('click', najechanieMyszka);

// parFirst.removeEventListener('mouseover', najechanieMyszka);