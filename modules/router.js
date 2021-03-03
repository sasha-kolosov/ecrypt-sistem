{
    const routerElement = document.getElementsByClassName('router-js')

    for(let i = 0; i < CONFIG.ROUTER.length; i++) {
        routerElement[i].addEventListener('click', () => {
            for(let j = 0; j < CONFIG.ROUTER.length; j++) {
                CONFIG.ROUTER[j].style.display = 'none'
            }
            CONFIG.ROUTER[i].style.display = 'block'
        })
    }
}