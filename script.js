function Menu(e) {
    let list = document.querySelector('#click')
    let grid = document.querySelector('#images')
    e.name === 'menu' ? 
    (e.name = "close", list.classList.remove('hidden'), grid.classList.add('hidden')) : 
    (e.name = "menu", list.classList.add('hidden'), grid.classList.remove('hidden'))
}