const bicicletta = [
    {
        nome: "Pinarello",
        peso: 25,
    },
    {
        nome: "Colnago",
        peso: 32,
    },
     {
        nome: "Specialaized",
        peso: 27,
    },
    {
        nome: "Trek",
        peso: 35,
    },
     {
        nome: "Cannodale",
        peso: 29,
    },
]

let biciPiuLeggera = bicicletta[0]

bicicletta.forEach(bici => {
    if(bici.peso < biciPiuLeggera.peso){
        biciPiuLeggera = bicicletta
    }
});
console.log(biciPiuLeggera)