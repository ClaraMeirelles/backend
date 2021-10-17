type amostraDeIdades = {
    numeros: [21, 32, 25, 65, 44, 18],
    obterEstatisticas: (numeros: number) => {}
}

function obterEstatisticas(numeros: number[]): {} {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }
    
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}



