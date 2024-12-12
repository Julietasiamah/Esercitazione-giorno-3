function CreateMainBoard (num){
    const main = document.querySelector ('#maintable')
for (let i = 0; i < num; i++) {
   const div = document.createElement ('div');
    div.classList.add ('cella');
    div.innerText = i + 1

    main.appendChild (div)


    
}
}

function generateRandomNumber (num){
    const numRandom = Math.round(Math.random()*num)
}


const Numeritombola = 76
CreateMainBoard (Numeritombola)
generateRandomNumber (Numeritombola)


/*function genearateRandomNumber(num) {
    let numRand = Math.round(Math.random() * num)
    if(mainBoardNum.length === num) {
        alert('Estrazione completa')
        return
    }
}


const numeriTombola = 76;
const mainBoardNum = [];*/


/*if(!mainBoardNum.includes(numRand) && numRand !== 0 ){
    mainBoardNum.push(numRand)
    let cells = document.querySelectorAll('#main-board div.cell')
    cells[numRand-1].classList.add('estratto')
} else {
    genearateRandomNumber(num)
}
}

const numeriTombola = 76;
const mainBoardNum = [];

createMainBoard(numeriTombola)
let btnRand = document.querySelector('#randBtn')
btnRand.addEventListener('click', () => setInterval(() => genearateRandomNumber(numeriTombola), 500))0*/
