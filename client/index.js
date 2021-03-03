const root = document.getElementById('root')

root.innerHTML = (new App).render()

window.location.hash = '/'

for(let i = 0; i < DATA.languageElements.length; i++) {

    document.getElementById(DATA.languageElements[i]).innerHTML = DATA.EN[i]

}