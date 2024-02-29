function gerar(){
    const clubes = [
        'Flamengo',
        'Palmeiras',
        'Atlético MG',
        'Fluminense',
        'São Paulo',
        'Internacional',
        'Grêmio',
        'Athletico PR',
        'Ceará',
        'Fortaleza',
        'Corinthians',
        'Bahia',
        'Atlético GO',
        'Sport',
        'Santos',
        'Chapecoense',
        'América MG',
        'Cuiabá',
        'Juventude',
        'RB Bragantino'
    ];

    var temporada = [];


    var rodadas = [];
    var tela = document.querySelector('.temp')
    tela.innerHTML = ''
    for(var rod = 1; rod < 20; rod ++){
        var jogos = []
        var lista= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        var div = document.createElement('div')
        div.classList.add(`rodada`)
        tela.appendChild(div)
        div.id = `rodada ${rod}`
        div.innerHTML += `<h1>Rodada ${rod}</h1> <br>`
        for(var j = 1; j <= 10; j ++){
            var c1 = lista[Math.floor(Math.random() * lista.length)];
            var c2 = lista[Math.floor(Math.random() * lista.length)];
            //console.log(lista)
            while(c2 == c1){c2 = lista[Math.floor(Math.random()* lista.length)]}

            lista.splice(lista.indexOf(c1), 1)
            lista.splice(lista.indexOf(c2), 1)

            var teste1 = [clubes[c1], clubes[c2]]
            var teste2 = [clubes[c2], clubes[c1]]
            var teste = jogos.some(jogos => 
                jogos.times == teste1 ||
                jogos.times == teste2)
            if(!teste){
                confronto = {
                    jogo: j,
                    times: [clubes[c1], clubes[c2]]
                }
                jogos.push(confronto)}
            //console.log(jogos)
        }
        console.log(`Rodada ${rod}`)
        
        for(var p = 0;p < 10;p++){
           div.innerHTML += `Jogo ${jogos[p].jogo}: ${jogos[p].times[0]} x ${jogos[p].times[1]} <br>`
        }
        var div = document.createElement('div')
        div.classList.add(`rodada`)
        tela.appendChild(div)
        div.id = `rodada ${rod+19}`
        div.innerHTML += `<h1>Rodada ${rod+19}</h1> <br>`
        for(var p = 0;p < 10;p++){
            div.innerHTML += `Jogo ${jogos[p].jogo}: ${jogos[p].times[1]} x ${jogos[p].times[0]} <br>`
            }
        
        
    }
    /*for(var rod = 20; rod<40; rod++){
            var div = document.createElement('div')
            div.classList.add(`rodada`)
            tela.appendChild(div)
            div.id = `rodada ${rod}`
            div.innerHTML += `<h1>Rodada ${rod}</h1> <br>`
            for(var p = 0;p < 10;p++){
                div.innerHTML += `Jogo ${jogos[p].jogo}: ${jogos[p].times[1]} x ${jogos[p].times[0]} <br>`
             }
        }*/
}



