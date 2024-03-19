
// Traccia 1:
// Lavora con il DOM:
// crea una pagina HTML con 3 paragrafi e 3 bottoni.
// Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale.
// ogni paragrafo dovra' avere un colore diverso.
// il secondo dovra’ rendere il testo dei paragrafi in grassetto.
// il terzo dovra’ far scomparire e ricomparire i paragrafi.

// TIPS:
// ricordati della proprieta’ display: none in CSS!
// i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.

let colorChange = document.querySelector('#colorChange');
let btnBold = document.querySelector('#btnBold');
let btnView = document.querySelector('#btnView');

let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');

let p = document.querySelectorAll('p');



let randomColor = () => {
   let r = Math.floor(Math.random() * (256 - 0));
   let g = Math.floor(Math.random() * (256 - 0));
   let b = Math.floor(Math.random() * (256 - 0));
   return `rgb(${r}, ${g}, ${b})`;
};

colorChange.addEventListener('click', () => {

    p.forEach((p) => {
        p.style.color = randomColor();
    });

});

btnBold.addEventListener('click', () => {
    p.forEach(paragraph => {
        paragraph.classList.toggle('bold')
    }) 
});

btnView.addEventListener('click', () => {
    p.forEach(paragraph => {
        paragraph.classList.toggle('view')
    }) 
});



// Traccia 2:
// Crea un file html con le seguenti caratteristiche:
// un input per il titolo
// una textarea per inserire un paragrafo
// un bottone per creare l’articolo
// Al click sul bottone, crea un articolo popolato dai valori prelevati dai due input
// inserire nell’articolo anche la data di pubblicazione tramite questa istruzione → Date - JavaScript | MDN
// let date = new Date();
// let formatDate = date.toLocaleDateString()

// EXTRA:
// fai in modo che, cliccando sul bottone crea articolo, se titolo o paragrafo sono vuoti, esca un alert che informi l’utente del problema
// fai in modo che, una volta creato l’articolo, gli input vengano puliti

let sezioneArticoli = document.querySelector('#sezioneArticoli');
let title = document.querySelector('#title');
let description = document.querySelector('#description');
let btnCrea = document.querySelector('#btnCrea');

let resetForm = () => {
   document.getElementById('form').reset();
};

btnCrea.addEventListener('click', () => {
    let art = document.createElement('article');
    let date = new Date();
    let formatDate = date.toLocaleDateString();

    sezioneArticoli.appendChild(art);

    art.innerHTML = `
    <h2>${title.value}</h2> 
    <p>${description.value}</p>
    <p>${formatDate}</p>`;

    resetForm();
});

window.onload = resetForm;






