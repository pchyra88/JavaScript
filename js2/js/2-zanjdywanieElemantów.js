let element;

element = document.getElementById('parFirst');     //po id

element = document.getElementsByClassName('link');  // po class
// element = document.getElementsByClassName('link superlink');
// element = document.getElementsByClassName('link')[document.getElementsByClassName('link')length ];
element = document.getElementsByTagName('p'); // po tagu
// element = document.getElementsByTagName('p')[0];         //po tagu z id


// element = document.querySelector('#selectorFirst .parSecond .par2');    //pobranie konkretnej clasy i id #
// element = document.querySelector('#selectorFirst .parSecond .par2').innerHTML; //pobranie konkretnych class i pliku html do wyświetlenia tektu
element = document.querySelectorAll('#sectionFirst a');
// element = document.querySelectorAll('#sectionFirst a')[2].innerHTML;

element = document.getElementById('main-header').parentElement;

element = document.getElementById('main-header').parentElement.childNodes;
element = document.getElementById('main-header').parentElement.children;


element = document.querySelector('header').firstElementChild;
element = document.querySelector('header').lastElementChild;






console.log(element);