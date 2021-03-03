{
    const title = document.getElementById('title')

    const changeTitle = (value) => {
        title.innerHTML = value
    }

    const titleElement = document.getElementsByClassName('title-js')
    
    changeTitle(CONFIG.TITLES[0])

    for(let i = 0; i < CONFIG.TITLES.length; i++) {
        titleElement[i].addEventListener('click', () => {
            changeTitle(CONFIG.TITLES[i])
        })
    }
}   