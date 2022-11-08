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
 * funzione che permette di leggere una stringa al contrario
 * @param {string} string inserire una stringa
 * @returns {string}
 */
function reverseString(string){
    return string.split('').revrse().join('');
};

/**
 * funzione che determina se una parola è palindroma o meno
 * @param {string} parola inserisci una parola 
 * @returns {string}
 */
function palindromaController(parola){
    if(parola === reverseString(parola)){
        return 'Questa parola è palindroma';
    }else{
        return 'Questa parola non è palindroma';
    }
};

const inputEl = el('input');
const btnEl = el('button');
const outputEL = el('h1');