const input = document.querySelector('.task')
const button = document.querySelector('.add')
const container = document.querySelector('.container')
const para2 = document.querySelector('.para2')

button.addEventListener('click', addItem)

let para
let iconDelete
let iconDone
let div

function addItem() {
    if (input.value === '') {
        // button.removeEventListener('click', addItem)
        para2.innerHTML = 'You have to fill the input!'
    } else {
        //---------div container---------
        div = document.createElement('div')
        div.classList.add("divContainer")
        container.appendChild(div)
            //---------paragraf---------
        para = document.createElement('p')
        para.classList.add('para')
        div.appendChild(para)
            //---------icon check---------
        iconDone = document.createElement('button')
        iconDone.classList.add("done")
        div.appendChild(iconDone)
        iconDone.innerHTML = `<i class="fa-solid fa-check"></i>`
            //---------icon delete---------
        iconDelete = document.createElement('button')
        iconDelete.classList.add("delete")
        div.appendChild(iconDelete)
        iconDelete.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
            //---------stuf---------
        const value = input.value
        const value2 = value.charAt(0).toUpperCase() + value.slice(1);
        para.textContent = `${value2}.`
        para2.innerHTML = ''
    }

    input.value = ''
    input.focus()
    remove(iconDelete, iconDone, para, div)
    lineThrough(iconDone, para, div)

}

function remove(buttonDel, button, para, div) {
    buttonDel.addEventListener('click', function() {
        this.remove()
        button.remove()
        para.remove()
        div.remove()
    })
}

function lineThrough(item, para, div) {
    item.addEventListener('click', function() {
        para.classList.toggle('line')
        div.classList.toggle('line')
    })
}