/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 15
let num2 = 45
if (num1 > num2) {
  console.log (false)
} else {
  console.log (true)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 3

if (num3 !== 5) {
  console.log ('Not equal')
  
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5"
   in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num4 = 8
if (num4 % 5===0){
  console.log (num4 + "divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num5 = 2
let num6 = 7

if (num5 === 8 || num6 === 8 || num5 + num6 === 8 || num5 - num6 === 8) {
  console.log ( 'verificato')
  
}





  



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in 
  una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha 
  diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 150
let promotion = 50
let shipping = 10

if (totalShoppingCart > promotion){
  console.log ('Ha diritto alla spedizione gratuita')
} else if (totalShoppingCart <= promotion) {
  console.log ('Non ha diritto a spedizione gratuita')
} else {
  console.log ('Deve pagare' + totalShoppingCart + shipping)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando
  come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
 *0.8 */

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 100
let shipping2 = 10
let totalecarello2 = totalShoppingCart2 ;

if (totalShoppingCart *0.8 > 50) {
  console.log ('Promozione attivata')
}




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il 
  loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num7 = 15
let num8 = 30
let num9 = 25

if (num7 >= num8) {
  console.log( num7, num9, num8)  
} else if ( num8 <= num8) {   
} else {
  console.log( num7, num9, num8) 
}





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num11= 4


console.log (num11, typeof num11)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia 
  pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num10 = 20
if (num10 % 2 === 10){
  console.log ("Il risultato è pari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio c
  orretto in ogni circostanza.*/
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  
}

me.city= 'toronto'
console.log (me.skills, me.name, me.lastName, me.city)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log (me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere 
  l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop ()
console.log (me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num12 = ['' ]

console.log (num12)

num12 = [1,2,3,4,5,6,7,8,9,10]
console.log (num12)




/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 num12.splice (-1,1, 100)

 console.log (num12)