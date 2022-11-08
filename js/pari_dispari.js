/**
 * Funzione uguale a document.querySelector() ma riassunta in meno caratteri
 * @param {string} querySelector Indica un selettore css valido
 * @returns 
 */
 function el(querySelector){
    let domElement;
    if(querySelector === ':root' || querySelector === 'root'){
        domElement = document.documentElement;
    }else{
        domElement = document.querySelector(querySelector);
    };
    return domElement;
};

/**
 * Genera un numero random compreso tra (o uguale a) min e max
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
 function randomNum(min, max) {
    if (min < max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }else{
        return Math.floor(Math.random() * (min - max + 1)) + max;
    };
};

/**
 * Funzione che permette di controllare il valore dell'elemento selezionato in un 
 * gruppo di imput di tipo radio utilizzando l'attributo name degli elementi
 * @param {string} nameOfRadios indicare il name dei radio da controllare
 * @returns 
 */
function userSelectionController(nameOfRadios){
    if(el(`[name="${nameOfRadios}"]:checked`) === null){
        alert('Selezionare un opzione');
        return;
    }else{
        return el(`[name="${nameOfRadios}"]:checked`).value;
    };
};

const inputEl = el('#user-number');
const btnEl = el('button');
const outputEl = el('#output');

btnEl.addEventListener('click', function(){
    
});