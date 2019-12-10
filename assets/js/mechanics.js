var time = 15;
var xChar = 5;
var yChar = 5;
var charRun = 0;

function controls(evento) {
    evento.preventDefault();

    // Recupera o código da tecla pressionada
    var tecla = evento.keyCode;

    matriz[yChar][xChar] = 'background';

    switch (tecla) {
        case 38:
            // Up arrow
            if (yChar - 1 != -1)
                yChar = yChar - 1;
            break;
        case 37:
            // Left arrow
            if (xChar - 1 != -1)
                xChar = xChar - 1;
            break;
        case 39:
            // Right arrow
            if (xChar + 1 != tamanhoMatriz)
                xChar = xChar + 1;
            break;
        case 40:
            // Down arrow
            if (yChar + 1 != tamanhoMatriz)
                yChar = yChar + 1;
            break;
    }

    matriz[yChar][xChar] = 'character';

    charRun++;
    refreshScreen();
}

function trash() {
    var trashLimit;
    var xTrash = 0;
    var yTrash = 0;

    for (trashLimit = 0; trashLimit < 15; trashLimit++) {
        var xTrash = Math.floor(Math.random() * tamanhoMatriz);
        var yTrash = Math.floor(Math.random() * tamanhoMatriz);
        matriz[yTrash][xTrash] = Math.floor(Math.random() * 4) + 1;
    }
}

function timer() {
    if (time >= 0) {
        time = time - 1;
        document.getElementById("levelTimer").textContent = "Você tem " + time + " segundos.";
        if (time == 0) {
            time = -1;
            endGame();
            document.getElementById("levelTimer").textContent = "Você tem 0 segundos!";
        }
        refreshScreen();
    }
}

function endGame() {
    var x = 0;
    var y = 0;

    for (x = 0; x < tamanhoMatriz; x++)
        for (y = 0; y < tamanhoMatriz; y++) {
            if (matriz[x][y] == 1 || matriz[x][y] == 2 || matriz[x][y] == 3 || matriz[x][y] == 4)
                return alert("You Lost...");
        }
    return alert("You Won!");
}

function clear() {
    var x = 0;
    var y = 0;

    for (x = 0; x < tamanhoMatriz; x++)
        for (y = 0; y < tamanhoMatriz; y++)
            matriz[x][y] = 'background';
}

function resetValues() {
    time = 15;
    xChar = 5;
    yChar = 5;

    clear();
    trash();
    matriz[yChar][xChar] = 'character';
}

function reload() {
    resetValues();
    refreshScreen();
}