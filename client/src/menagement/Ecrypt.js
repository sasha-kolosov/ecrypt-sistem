const toEcrypt = (string) => {

    let finalStr = ""

    for(let i = 0; i < string.length; i++) {

        const random = Math.floor(Math.random() * Math.floor(10))

        finalStr = finalStr + random + string[i]

    }

    return finalStr
    
}