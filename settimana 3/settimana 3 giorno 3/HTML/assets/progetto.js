const selectinput = document.querySelector ('header input');
const selectbutton = document.querySelector ('header button');
const createlist = document.querySelector ('#lista');

function lasciaspazio () {
    selectbutton.addEventListener ('click', function (){
        selectinput.value = ' ';
    })
}
lasciaspazio ()

function createtask () {
    const listitem = document.createElement ('li')
    const span = document.createElement ('span')

    createlist.appendChild (listitem)
    span.addEventListener ('click', function () {
        span.style.textDecoration = ('lineTrough')
        listitem.appendChild (span)

        const deleteButtoN = document.createElement ('button')
        deleteButtoN.style.float = ('right')
        deleteButtoN.style.backgroundColor = ('red')
        listitem.appendChild (deleteButtoN)

    })
}
   
   createtask ()
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    /* span.textContent = selectinput.value;

span.addEventListener ('click', function () {
    span.style.
})

const deleteButtoN = document.createElement ('button')
deleteButtoN.textContent = 'Delete'
deleteButtoN.addEventListener ('click',function (e){
    e.stopPropagation ();
    span.removeChild (li);
})

listitem.appendChild (span)
listitem.appendChild (deleteButtoN)
createlist.appendChild (listitem)

selectinput.value

}
createtask () */