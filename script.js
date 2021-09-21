let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelho
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria aleatoriedade de cores

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);

    }
}

//Aciona os botões

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    },number);
}

//Checagem dos botões

let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível...`);
        nextLevel();
    }
}

//Clique do usuário

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//retornando a cor

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//próximo nível

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//game over

let lose = () => {
    alert(`Pontuação: ${score}! \nVocê perdeu!\nClique OK para um novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

//game start

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo...');
    score = 0;

    nextLevel();
}

//eventos de clique

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();