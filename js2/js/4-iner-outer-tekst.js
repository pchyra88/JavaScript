let header = document.querySelector('header');
// header.innerHTML = 'Nowy kontent w header';
// header.innerHTML = '<a herf="a">Nowy kontent w header</a>';

// console.log(header.innerHTML);

header.lastElementChild.textContent = 'Span w hederze !'; // lub += '!'

// console.log(header.lastElementChild.textContent);

// console.log(document.querySelector('#parSecond').outerHTML);

let link = document.querySelector('.link .superlink');

link.classList.add('nowa-klasa');
link.classList.remove('nowa-klasa');

console.log(link.classList);


