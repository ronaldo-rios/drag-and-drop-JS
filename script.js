
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart)           //target mostra/indica qual objeto que você clicou
    item.addEventListener('dragend', dragEnd)
})

document.querySelectorAll('.area').forEach( area => {
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
})

//Functions item:
function dragStart(event){
    event.currentTarget.classList.add('dragging')
}

function dragEnd(event){
    event.currentTarget.classList.remove('dragging')
}

//Functions area:
function dragOver(event){
    event.preventDefault()
    event.currentTarget.classList.add('hover')
}

function dragLeave(event){
    event.currentTarget.classList.remove('hover')
}

function drop(event){
    event.currentTarget.classList.remove('hover')

    let dragItem = document.querySelector('.item.dragging')
    
    if(event.currentTarget.querySelector('.item') === null){   //Impedir que mais de um elemento seja adicionado na div
        event.currentTarget.appendChild(dragItem)
    }
}