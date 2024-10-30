// Objects
const player1 = {
    NOME: "Mario", 
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi", 
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

// RollDice (AsyncFunctions)
async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

// Get Random Block
async function getRandonBlock() {
    let random = Math.random();
    let result  

    switch (true){
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break; 
        default:
            result = "CONFRONTO";
    }
    return result
}

// Race Engine(Functions Chains)
async function playRaceEngine(character1, character2) {
    
    // Rounds(For)
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);

        // Sortear bloco
        let block = await getRandonBlock();
        console.log(`Bloco: ${block}`)
    }
}

// Main (Auto Invoke)
(async function main(params) {
    // Start (Template String)
    console.log(`🏁 🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`);

    await playRaceEngine(player1, player2);
})()

