const historyContainer = document.getElementById('history-container')

const inputText = document.getElementById('input-text')

const button = document.getElementById('button')

const details = document.getElementById('details')

const check = document.getElementById('check')

const historyNullButton = document.getElementById('history-null-button')

const detailsNullButton = document.getElementById('details-null-button')

const historyNullActive = new FastRouter({
    button: historyNullButton,
    index: 0,
    arr: CONFIG.ROUTER,
    hash: CONFIG.HASH[0]
})

const detailsNullActive = new FastRouter({
    button: detailsNullButton,
    index: 1,
    arr: CONFIG.ROUTER,
    hash: CONFIG.HASH[1]
})

const checkRouter = new FastRouter({
    button: document.getElementById('check'),
    index: 1,
    arr: CONFIG.ROUTER,
    hash: CONFIG.HASH[1]
})

checkRouter.rout()

historyNullActive.rout()

detailsNullActive.rout()

button.addEventListener('click', () => {

    if (inputText.value.trim !== "") {

        const historyNull = document.getElementById('history-null')

        historyNull.style.display = "none"

        detailsNullActive.rout()

        details.innerHTML += `
            <div class="Details__block none-js">
                <div class="Details__block-count">
                    <span class="count-js">Count</span>: ${DATA.count}
                </div>
                <div class="Details__block-date">
                    <span class="data-js">Date</span>: ${DATA.detailsDate}
                </div>
                <div class="Details__block-text">
                    <span class="text-js">Text</span>: ${inputText.value.trim()}
                </div>
            </div>
        `

        DATA.count += 1

        const text = toEcrypt(inputText.value)

        historyContainer.innerHTML += `
            <div class="History__block">
                <div class="History__block-text">
                    ${text}
                </div>
                <div class="History__block-details">
                    <img src="https://img.icons8.com/cotton/64/000000/search--v1.png" class="details-icon" />
                </div>
            </div>
        `

        checkEn()

        const detailsIcon = document.getElementsByClassName('details-icon')

        for (let i = 0; i < detailsIcon.length; i++) {

            (new FastRouter({
                button: detailsIcon[i],
                index: 2,
                arr: CONFIG.ROUTER,
                hash: CONFIG.HASH[2]
            })).rout()

            detailsIcon[i].addEventListener('click', () => {

                const detailsBlock = document.getElementsByClassName('Details__block')

                const detailsNull = document.getElementById('details-null')

                detailsNull.style.display = "none"

                for(let j = 0; j < detailsBlock.length; j++) {

                    detailsBlock[j].style.display = "none"

                }

                detailsBlock[i].style.display = "block"

            })

        }

        inputText.value = ''

    }

    checkEn()

})

const checkEn = () => {

    const count = document.getElementsByClassName('count-js')

    const data = document.getElementsByClassName('data-js')

    const text = document.getElementsByClassName('text-js')

    if(DATA.LANGUAGE === "ru") {

        for(let i = 0; i < count.length; i++) {

            count[i].innerHTML = "Счёт"

            data[i].innerHTML = "Дата"

            text[i].innerHTML = "Текст"

        }

    } else if(DATA.LANGUAGE === "en") {

        for(let i = 0; i < count.length; i++) {

            count[i].innerHTML = "Count"

            data[i].innerHTML = "Date"

            text[i].innerHTML = "Text"

        }

    }

}

const enButton = document.getElementById('en-button')

const ruButton = document.getElementById('ru-button')

enButton.addEventListener('click', () => {

    for(let i = 0; i < DATA.languageElements.length; i++) {

        document.getElementById(DATA.languageElements[i]).innerHTML = DATA.EN[i]
    
    }

    DATA.LANGUAGE = "en"

    checkEn()

})

ruButton.addEventListener('click', () => {

    for(let i = 0; i < DATA.languageElements.length; i++) {

        document.getElementById(DATA.languageElements[i]).innerHTML = DATA.RU[i]
    
    }

    DATA.LANGUAGE = "ru"

    checkEn()

})  