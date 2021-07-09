let player, winner = null;
let selectedPlayer = document.getElementById('selected-player');
let selectedWinner = document.getElementById('selected-winner');

changePlayer('X');
function selectSquare(id){
    if(winner !== null){
        return;
    }
    let square = document.getElementById(id);

    square.innerHTML = player;
    square.style.color = '#fff';

    if(player === 'X'){
        player = 'O';
    }else{
        player = 'X';
    }
    changePlayer(player);
    winCheck();
}

function changePlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;
    
}

function winCheck(){
    let square1 = document.getElementById('1')
    let square2 = document.getElementById('2')
    let square3 = document.getElementById('3')
    let square4 = document.getElementById('4')
    let square5 = document.getElementById('5')
    let square6 = document.getElementById('6')
    let square7 = document.getElementById('7')
    let square8 = document.getElementById('8')
    let square9 = document.getElementById('9')

    if(checksequence(square1, square2, square3)){
        selectedWinner.innerHTML = square1;
        changeSquareColor(square1, square2, square3);
        changeWinner(square1);
        return;
    }if(checksequence(square4, square5, square6)){
        selectedWinner.innerHTML = square1;
        changeSquareColor(square4, square5, square6);
        changeWinner(square4);
        return;
    }if(checksequence(square7, square8, square9)){
        selectedWinner.innerHTML = square7;
        changeSquareColor(square7, square8, square9);
        changeWinner(square7);
        return;
    }if(checksequence(square1, square5, square9)){
        selectedWinner.innerHTML = square1;
        changeSquareColor(square1, square5, square9);
        changeWinner(square1);
        return;
    }if(checksequence(square3, square5, square7)){
        selectedWinner.innerHTML = square3;
        changeSquareColor(square3, square5, square7);
        changeWinner(square3);
        return;
    }if(checksequence(square1, square2, square3)){
        selectedWinner.innerHTML = square1;
        changeSquareColor(square1, square4, square7);
        changeWinner(square1);
        return;
    }if(checksequence(square2, square5, square8)){
        selectedWinner.innerHTML = square1;
        changeSquareColor(square2, square5, square8);
        changeWinner(square2);
        return;
    }if(checksequence(square3, square6, square9)){
        selectedWinner.innerHTML = square3;
        changeSquareColor(square3, square6, square9);
        changeWinner(square3);
        return;
    }
}

function checksequence(square1, square2, square3){
    let itsEqual = false;
    if(square1.innerHTML != '' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        itsEqual = true;
    }

    return itsEqual;
}

function changeSquareColor(square1, square2, square3){
    square1.style.background = '#0f0';
    square2.style.background = '#0f0';
    square3.style.background = '#0f0';
}

function changeWinner(square){
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
}

function restart(){
    winner = null;
    selectedWinner.innerHTML = '';
    for(let i = 1; i <= 9; i++){
        let square = document.getElementById(i);
        square.style.background = '#9932cc';
        square.innerHTML = '';
    }

    changePlayer('X');
}