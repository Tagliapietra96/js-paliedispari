/**
 * Funzione uguale a document.querySelector() ma riassunta in meno caratteri
 * @param {string} querySelector Indica un selettore css valido
 * @returns 
 */
function el(querySelector) {
    let domElement;
    if (querySelector === ':root' || querySelector === 'root') {
        domElement = document.documentElement;
    } else {
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
    if (min < max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * (min - max + 1)) + max;
    };
};

/**
 * Funzione che permette di controllare il valore dell'elemento selezionato in un 
 * gruppo di imput di tipo radio utilizzando l'attributo name degli elementi
 * @param {string} nameOfRadios indicare il name dei radio da controllare
 * @returns 
 */
function userSelectionController(nameOfRadios) {
    if (el(`[name="${nameOfRadios}"]:checked`) === null) {
        alert('Selezionare un opzione');
        return;
    } else {
        return el(`[name="${nameOfRadios}"]:checked`).value;
    };
};

function somma(a, b) {
    return parseInt(a) + parseInt(b);
};

/**
 * Funzione che detrmina se un numero è pari o dispari
 * @param {number} num inserisci il numero da analizzare
 * @returns {string}
 */
function pariController(num) {
    if (num % 2 === 0) {
        return 'Pari';
    } else {
        return 'Dispari';
    };
};

const inputEl = el('#user-number');
const btnEl = el('button');
const outputEl = el('#output');
const winnerEl = el('#winner');

btnEl.addEventListener('click', function () {
    let selection = userSelectionController('pari-o-dispari');
    if (selection === undefined) {
        return;
    };

    let input = inputEl.value;
    if (input === '' || input < 1 || input > 5) {
        alert('inserisci un numero tra 1 e 5');
    } else {
        outputEl.innerHTML = "";
        let pcInput = randomNum(1, 5);
        let result = somma(input, pcInput);

        for (let i = 0; i < 2; i++) {
            let divEL = document.createElement('div');
            divEL.classList.add('w-100');
            let h2El = document.createElement('h2');
            if (i > 0) {
                h2El.innerHTML = `Il numero del computer: ${pcInput}`;
            } else {
                h2El.innerHTML = `Il tuo numero: ${input}`;
            }
            divEL.append(h2El)
            outputEl.append(divEL);
        };
        outputEl.append(winnerEl);

        if (pariController(result) === userSelectionController('pari-o-dispari')) {
            winnerEl.innerHTML = `La somma è ${result}, hai vinto!`;
        } else {
            winnerEl.innerHTML = `La somma è ${result}, hai perso!`;
        };

    }
});