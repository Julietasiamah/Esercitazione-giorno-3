
/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let area = function (base,altezza){
    return base * altezza;
}
let calcolo = area(11,12);
console.log (calcolo)


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, 
 ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (num1, num2) {
    if( num1 === num2)
        return (num1 + num2) *3
  else {
    return (num1 + num2)
}
}
console.log (crazySum (2,3))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come 
 parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
//return Math.abs (num3 -19)
function crazyDiff (num3){
if (num3 > 19)
    return Math.abs (num3 - 19)*3
else {
    return Math.abs (num3 - 19)
}
}
console.log (crazyDiff (25,19))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
function boundary (n){
    if (n >= 20 && n <= 100 || n === 400 )
        return (true)
    else {
        return (false)
    }
}
console.log (boundary (400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
  ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let epify = function (stringa){
    return 'EPICODE' + stringa
    if (stringa.startsWith ('EPICODE')){
        return stringa
    }
}       
        
let result = epify ('Epicode Lessons')
console.log (result)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo 
 come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


/* SCRIVI QUI LA TUA RISPOSTA */


function check3and7 (num4){
    if (num4 > 0 && (num4 % 3 === 0 || num4 % 7 === 0)) {
        return (true)
    } else {
        return (false)
    }
}

console.log (check3and7 (10))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa 
 fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString (lett1){
        
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
