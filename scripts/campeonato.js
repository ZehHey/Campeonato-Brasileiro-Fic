const clubes = [
    'Flamengo',
    'Palmeiras',
    'Atlético Mineiro',
    'Fluminense',
    'São Paulo',
    'Internacional',
    'Grêmio',
    'Athletico Paranaense',
    'Ceará',
    'Fortaleza',
    'Corinthians',
    'Bahia',
    'Atlético Goianiense',
    'Sport',
    'Santos',
    'Chapecoense',
    'América Mineiro',
    'Cuiabá',
    'Juventude',
    'Red Bull Bragantino'
];

var temporada = []


for(var rodada = 1; rodada<20; rodada ++){ //Primeiro looping define 20 rodadas
    var lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19];
    var jogosida = []
    var jogosvolta = []
    for(var cont = 1; cont <= 10; cont++){  // segundo looping define os dez jogos de cada rodada
        var c1 = lista[Math.floor(Math.random() * lista.length)];
        lista.splice(lista.indexOf(c1), 1);
        var c2 = lista[Math.floor(Math.random() * lista.length)];
        lista.splice(lista.indexOf(c2), 1);
        var partida = [`${clubes[c1]} x ${clubes[c2]}`]
        if(!temporada.some(jogo => jogo.Partidas === partida)){ //condição que verifica se já existe a mesma partida na temporada
            jogosida.push(`${cont}: ${clubes[c1]} x ${clubes[c2]}`) //jogos de ida definidos
            jogosvolta.push(`${cont}: ${clubes[c2]} x ${clubes[c1]}`) // jogos de volta definidos
    }else{
        cont --
    }
}
    temporada.push({Rodada: rodada, Partidas: jogosida}) // jogos de ida: Rodadas 1 a 19
    temporada.push({Rodada: rodada + 19, Partidas: jogosvolta}) //jogos de volta: Rodadas 20 a 38 
}
temporada.sort(function(a, b){          //Função que retorna a lista de temporadas em ordem crescente
    return a.Rodada - b.Rodada
})

console.log(temporada)

