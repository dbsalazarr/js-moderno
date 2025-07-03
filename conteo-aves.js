birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

totalAves = birdsPerDay.reduce( (total, totalDia) => {return total + totalDia}, 0)
console.log(totalAves);

function birdsInWeek( listBirds, weeks ){
    total = 0
    for( let i = 7*(weeks-1); i < 7*weeks; i++){
        total += listBirds[i]
    }
    return total
}

totalSecondWeek = birdsInWeek(birdsPerDay, 2)

console.log(totalSecondWeek);

// Arreglar conteo
birdsPerDay = [2, 5, 0, 7, 4, 1];
let fixBirdCountLog = birdsPerDay.map( ( birds, index ) => {
    if (index % 2 == 0) {
        return birds + 1
    }else{
        return birds
    }
})

console.log(fixBirdCountLog);