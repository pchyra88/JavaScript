let footer = document.createElement('footer'); //<footer></footer>

let footerText = document.createTextNode('Stopka strony');  //stopka strony

footer.appendChild(footerText); // <footer>Stopka strony </footer>

footer.setAttribute('class', 'custom-footer'); //<footer class'custom-footer><Stopka strony</footer>

document.querySelector('section').insertAdjacentElement('afterend', footer); // dodanie do pliku HTML


// console.log(footer);



let parSecond = document.querySelector('#parSecond');  //usunięcie sekcji parSecond


document.body.firstElementChild.removeChild(parSecond);

let parFirst = document.querySelector('.par2');

document.body.firstElementChild.removeAttribute(par2);