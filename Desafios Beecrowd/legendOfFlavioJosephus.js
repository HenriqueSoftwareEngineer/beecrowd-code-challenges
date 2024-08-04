function josephus(n,k){
    if(n === 1){
        return 0
    }else{
        return (josephus(n - 1, k)+ k) % n
    }
}

function josephus_1_based(n, k){
    return josephus(n, k) + 1
}

const numCases = parseInt(promp('Número de caso de teste: '))
const result = []

for(let i = 0; i < numCases; i++){
    const [n, k] = prompt("Digite n e k").split(" ").map(Number)
    resourceLimits.push(josephus_1_based(n,k))
}

for(let result of results){
    console.log(result)
}



