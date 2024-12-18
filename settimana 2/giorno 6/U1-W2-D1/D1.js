/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
I principali datatype in JavaScript sono: Le stringhe ossia carratteri alfabetici 
che vengono scritti con doppi o singoli apici.
Esempio: let nome = "Fabio"
Poi ce il dato numerico che viene riportato senza apici, e per indicare la decimale bisogna inserire il . (punto).
Esempio: let numero = 15
Abbiamo anche i dati Booleani che sono true e false, dove true è uguale a 1 e 
false uguale a 0 e in genere serve per poter dare un indicazione al nostro codice.
Ci sono ache altri datatype come per esempio Null che è l'assenza intenzionale di un 
valore e Undifined indica l'assenza di un valore, una variabile che non è mai stata indicata. 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = 'Juliet'
console.log (myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12
let num2= 20

console.log ("Il risultato della somma è" + " " + (num1 + num2))

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

console.log ("Questo è il numero della variabile:" + " " + x)



/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA /*

const myName = Asiamah




/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y=4
console.log (x-y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 
 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let name1= "john"
let name2="John"
console.log (name1 === name2)
console.log (name1 === name2) (tolowercase)//Tolowercase serve per trasformare il carrattere da maiuscola a minuscola*/

let name1 = "john"
let name2 = "John"


console.log(name1===name2) 
let minuscolo = name2.toLowerCase()
console.log (name1===minuscolo)