{
    const hashElement = document.getElementsByClassName('hash-js')

    for (let i = 0; i < CONFIG.ROUTER.length; i++) {
        hashElement[i].addEventListener('click', () => {
            window.location.hash = CONFIG.HASH[i]
        })
    }
}