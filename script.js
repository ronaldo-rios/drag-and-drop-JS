let areas = {a:null, b:null, c:null}


document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart)           //target mostra/indica qual objeto que você clicou
    item.addEventListener('dragend', dragEnd)
})

document.querySelectorAll('.area').forEach( area => {
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
})

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral)
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral)
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral)


//Functions item:
function dragStart(event){
    event.currentTarget.classList.add('dragging')
}

function dragEnd(event){
    event.currentTarget.classList.remove('dragging')
}

//Functions area:
function dragOver(event){
    if(event.currentTarget.querySelector('.item') === null){
    event.preventDefault()
    event.currentTarget.classList.add('hover')
    }
}

function dragLeave(event){
    event.currentTarget.classList.remove('hover')
}

function drop(event){
    event.currentTarget.classList.remove('hover')

    
    if(event.currentTarget.querySelector('.item') === null){   //Impedir que mais de um elemento seja adicionado na div
        let dragItem = document.querySelector('.item.dragging')
        event.currentTarget.appendChild(dragItem)
        updateAreas()
    }
}

//Functions NeutralAera:

function dragOverNeutral(e){
    e.preventDefault()
    e.currentTarget.classList.add('hover')
}

function dragLeaveNeutral(e){
    e.currentTarget.classList.remove('hover')
}

function dropNeutral(e){
    e.currentTarget.classList.remove('hover')
    let dragItem = document.querySelector('.item.dragging')
    e.currentTarget.appendChild(dragItem)
    updateAreas()
}

// Logic functions:

function updateAreas(){
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name')

        if(area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML
        }
        else {
            areas[nema] = null
        }
    })

    if(areas.a === '1' && areas.b === '2' && areas.c === '3'){
        document.querySelector('.areas').classList.add('correct')
    }
    else{
        document.querySelector('.areas').classList.remove('correct')

    }
}