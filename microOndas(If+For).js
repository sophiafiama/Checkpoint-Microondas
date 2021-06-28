const pratos = ["Pipoca", "Macarrão", "Carne", "Feijão", "Brigadeiro"]
const tempos = [10, 8, 15, 12, 8]

let aquecer = function (comida, tempo) {
        for (let i = 0; i < pratos.length; i++) {
            if (pratos[i] == comida) {
                if (tempo >= tempos[i] && tempo <= (tempos[i] * 2)) { 
                    return "Prato pronto, bom apetite!!!"
                }
                else if (tempo > tempos[i]*2 && tempo < (tempos[i] * 3)) { 
                    return "Prato queimou!!!"
                }
                else if (tempo >= tempos[i] * 3) { 
                    return "Kabuuuuuumm"
                }
                else if (tempo < tempos[i]) { 
                    return "Tempo insuficiente"
                }
            }
        }
        return "Prato inexistente"
    }
console.log(aquecer("Brigadeiro", 8))
console.log(aquecer("Brigadeiro", 5))
console.log(aquecer("Brigadeiro", 20))
console.log(aquecer("Brigadeiro", 30))
console.log(aquecer("Doce", 8))
