function microondas (tempo, opcao){
    if(tempo < opcao){
        return "tempo insuficiente"
    }
    else if(tempo >= opcao && tempo <= opcao*2){
        return "Prato pronto, bom apetite!"
    }
    else if(tempo > opcao*2 && tempo < opcao*3){
        return "Comida queimou!!"
    }
    else if(tempo >= opcao*3){
        return "Kabuuummm!"
    }
}

function Menu (tempo, opcao){
    const pipoca = 10,  macarrão = 8, carne = 15, feijao = 12, brigadeiro = 8;
    switch(opcao){
        case 1:
            return microondas(tempo, pipoca)
            break;
        case 2:
            return microondas(tempo, macarrão)
            break;
        case 3:
            return microondas(tempo, carne)
            break;
        case 4:
            return microondas(tempo, feijao)
            break;
        case 5:
            return microondas(tempo, brigadeiro)
            break;
        default:
            return "Prato inexistente"
    }
}

console.log(Menu(10, 1));
console.log(Menu(8, 2));
console.log(Menu(15, 3));
console.log(Menu(12, 4));
console.log(Menu(8, 5));