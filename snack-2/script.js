const squadre = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juve",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Pisa",
        puntiFatti: 0,
        falliSubiti: 0,
    },
]

function numeroRandom(max) {
    return Math.floor(Math.random() * 10)
    
}

squadre.forEach(squadra => {
    squadra.puntiFatti = numeroRandom(10)
    squadra.falliSubiti = numeroRandom(10)
});

const falliPerSquadra = squadre.map((squadra => {
    return {
        nome: squadra.nome,
        falliSubiti: squadra.falliSubiti,
    }
}))

console.log(falliPerSquadra)

