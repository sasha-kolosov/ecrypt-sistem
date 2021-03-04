const toEcrypt = (string) => {

    let finalStr = ""

    for (let i = 0; i < string.length; i++) {

        if (string[i] == "1") {
            finalStr = finalStr + "!@"
        } else if (string[i] == "2") {
            finalStr = finalStr + "!#"
        } else if (string[i] == "3") {
            finalStr = finalStr + "!$"
        } else if (string[i] == "4") {
            finalStr = finalStr + "!%"
        } else if (string[i] == "5") {
            finalStr = finalStr + "!^"
        } else if (string[i] == "6") {
            finalStr = finalStr + "!&"
        } else if (string[i] == "7") {
            finalStr = finalStr + "!*"
        } else if (string[i] == "8") {
            finalStr = finalStr + "!("
        } else if (string[i] == "9") {
            finalStr = finalStr + "!)"
        }

        if (string[i] == " ") {
            finalStr = finalStr + "~~"
        }

        if (string[i] == "q") {
            finalStr = finalStr + "!_"
        } else if (string[i] == "w") {
            finalStr = finalStr + "!+"
        } else if (string[i] == "e") {
            finalStr = finalStr + "!?"
        } else if (string[i] == "r") {
            finalStr = finalStr + "!>"
        } else if (string[i] == "t") {
            finalStr = finalStr + "!<"
        } else if (string[i] == "y") {
            finalStr = finalStr + "!~"
        } else if (string[i] == "u") {
            finalStr = finalStr + "@#"
        } else if (string[i] == "i") {
            finalStr = finalStr + "@$"
        } else if (string[i] == "o") {
            finalStr = finalStr + "@%"
        } else if (string[i] == "p") {
            finalStr = finalStr + "@^"
        } else if (string[i] == "a") {
            finalStr = finalStr + "@&"
        } else if (string[i] == "s") {
            finalStr = finalStr + "@*"
        } else if (string[i] == "d") {
            finalStr = finalStr + "@("
        } else if (string[i] == "f") {
            finalStr = finalStr + "@)"
        } else if (string[i] == "g") {
            finalStr = finalStr + "@_"
        } else if (string[i] == "h") {
            finalStr = finalStr + "@+"
        } else if (string[i] == "j") {
            finalStr = finalStr + "@?"
        } else if (string[i] == "k") {
            finalStr = finalStr + "@>"
        } else if (string[i] == "l") {
            finalStr = finalStr + "@<"
        } else if (string[i] == "z") {
            finalStr = finalStr + "@~"
        } else if (string[i] == "x") {
            finalStr = finalStr + "#$"
        } else if (string[i] == "c") {
            finalStr = finalStr + "#%"
        } else if (string[i] == "v") {
            finalStr = finalStr + "#^"
        } else if (string[i] == "b") {
            finalStr = finalStr + "#^"
        } else if (string[i] == "n") {
            finalStr = finalStr + "#&"
        } else if (string[i] == "m") {
            finalStr = finalStr + "#*"
        }

        if (string[i] == "ё") {
            finalStr = finalStr + "#("
        } else if (string[i] == "й") {
            finalStr = finalStr + "#)"
        } else if (string[i] == "ц") {
            finalStr = finalStr + "#_"
        } else if (string[i] == "у") {
            finalStr = finalStr + "#+"
        } else if (string[i] == "к") {
            finalStr = finalStr + "#?"
        } else if (string[i] == "е") {
            finalStr = finalStr + "#>"
        } else if (string[i] == "н") {
            finalStr = finalStr + "#<"
        } else if (string[i] == "г") {
            finalStr = finalStr + "$%"
        } else if (string[i] == "ш") {
            finalStr = finalStr + "$^"
        } else if (string[i] == "щ") {
            finalStr = finalStr + "$&"
        } else if (string[i] == "з") {
            finalStr = finalStr + "$*"
        } else if (string[i] == "х") {
            finalStr = finalStr + "$("
        } else if (string[i] == "ъ") {
            finalStr = finalStr + "$)"
        } else if (string[i] == "ф") {
            finalStr = finalStr + "$_"
        } else if (string[i] == "ы") {
            finalStr = finalStr + "$+"
        } else if (string[i] == "в") {
            finalStr = finalStr + "$?"
        } else if (string[i] == "а") {
            finalStr = finalStr + "$>"
        } else if (string[i] == "п") {
            finalStr = finalStr + "$<"
        } else if (string[i] == "р") {
            finalStr = finalStr + "%^"
        } else if (string[i] == "о") {
            finalStr = finalStr + "%&"
        } else if (string[i] == "л") {
            finalStr = finalStr + "%*"
        } else if (string[i] == "д") {
            finalStr = finalStr + "%("
        } else if (string[i] == "ж") {
            finalStr = finalStr + "%)"
        } else if (string[i] == "э") {
            finalStr = finalStr + "%_"
        } else if (string[i] == "я") {
            finalStr = finalStr + "%+"
        } else if (string[i] == "ч") {
            finalStr = finalStr + "%?"
        } else if (string[i] == "с") {
            finalStr = finalStr + "%>"
        } else if (string[i] == "м") {
            finalStr = finalStr + "%<"
        } else if (string[i] == "и") {
            finalStr = finalStr + "^&"
        } else if (string[i] == "т") {
            finalStr = finalStr + "^*"
        } else if (string[i] == "ь") {
            finalStr = finalStr + "^("
        } else if (string[i] == "б") {
            finalStr = finalStr + "^)"
        } else if (string[i] == "ю") {
            finalStr = finalStr + "^)"
        }

        if (string[i] == "~") {
            finalStr = finalStr + "^_"
        } else if (string[i] == "`") {
            finalStr = finalStr + "^+"
        } else if (string[i] == "!") {
            finalStr = finalStr + "^?"
        } else if (string[i] == "@") {
            finalStr = finalStr + "^>"
        } else if (string[i] == "#") {
            finalStr = finalStr + "^<"
        } else if (string[i] == "№") {
            finalStr = finalStr + "&*"
        } else if (string[i] == "$") {
            finalStr = finalStr + "&("
        } else if (string[i] == ";") {
            finalStr = finalStr + "&)"
        } else if (string[i] == "%") {
            finalStr = finalStr + "&_"
        } else if (string[i] == "^") {
            finalStr = finalStr + "&+"
        } else if (string[i] == ":") {
            finalStr = finalStr + "&?"
        } else if (string[i] == "&") {
            finalStr = finalStr + "&>"
        } else if (string[i] == "?") {
            finalStr = finalStr + "&<"
        } else if (string[i] == "*") {
            finalStr = finalStr + "*("
        } else if (string[i] == "(") {
            finalStr = finalStr + "*)"
        } else if (string[i] == ")") {
            finalStr = finalStr + "*_"
        } else if (string[i] == "_") {
            finalStr = finalStr + "*+"
        } else if (string[i] == "-") {
            finalStr = finalStr + "*?"
        } else if (string[i] == "+") {
            finalStr = finalStr + "*>"
        } else if (string[i] == "=") {
            finalStr = finalStr + "*<"
        } else if (string[i] == "{") {
            finalStr = finalStr + "()"
        } else if (string[i] == "[") {
            finalStr = finalStr + "(_"
        } else if (string[i] == "}") {
            finalStr = finalStr + "(+"
        } else if (string[i] == "]") {
            finalStr = finalStr + "(?"
        } else if (string[i] == "\\") {
            finalStr = finalStr + "(>"
        } else if (string[i] == "|") {
            finalStr = finalStr + "(<"
        } else if (string[i] == "/") {
            finalStr = finalStr + ")_"
        } else if (string[i] == "'") {
            finalStr = finalStr + ")+"
        } else if (string[i] == "\"") {
            finalStr = finalStr + ")?"
        } else if (string[i] == ",") {
            finalStr = finalStr + ")<"
        } else if (string[i] == ".") {
            finalStr = finalStr + "_+"
        } else if (string[i] == ">") {
            finalStr = finalStr + "_?"
        } else if (string[i] == "<") {
            finalStr = finalStr + "_>"
        }

    }

    return finalStr

}
