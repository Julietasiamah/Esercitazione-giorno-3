

/*function Creazionenumeri () {
const container = document.querySelector("#numeri");
for (let i = 1; i <= 76; i++) {
    if (i % 10 === 1) {
        container += "<tr>";
    }
    container.innerHTML 
}


 /* const Estrazionerandom = []
    for (let i = 1; i <= 76; i++) {
        Estrazionerandom.push(i)
    }

    for (let i = 0; i < Estrazionerandom.length;i++) {
        console.log (Estrazionerandom[i])
    }

    const tabella = document.querySelector ('.tabella')
    tabella.innerHTML = Estrazionerandom*/

//}
//Creazionenumeri ()


/*function CreazioneTabella ()   {
    const table = document.querySelector ('#tabella')
    

}
CreazioneTabella ()*/
function tableNumber (){

const container = document.querySelector("#tabella-container");

const tabella = document.createElement("table");
tabella.classList.add("custom-table"); 

let riga;
for (let i = 1; i <= 76; i++) {
    if (i % 10 === 1) {
        riga = document.createElement("tr");
        tabella.appendChild(riga);
    }

    const cella = document.createElement("td");
    cella.textContent = i;
    riga.appendChild(cella);
}

container.appendChild(tabella);

}
tableNumber ()

