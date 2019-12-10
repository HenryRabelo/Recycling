var context;
var tamanhoMatriz = 10;
var matriz = new Array(tamanhoMatriz);

function refreshScreen() {
    var x = 0;
    var y = 0;

    for (x = 0; x < tamanhoMatriz; x++)
        for (y = 0; y < tamanhoMatriz; y++) {

            // Draws square at a relative screen position
            // Multiplies by 30, because each position on the screen has 30px.

            switch (matriz[x][y]) {
                case('background'):
                    context.drawImage(grassSprite, y * 30 + 2, x * 30 + 2, 30, 30);
                    break;
                case(1):
                    context.drawImage(paperSprite, y * 30 + 2, x * 30 + 2, 28, 28);
                    break;
                case(2):
                    context.drawImage(plasticSprite, y * 30 + 2, x * 30 + 2, 28, 28);
                    break;
                case(3):
                    context.drawImage(glassSprite, y * 30 + 2, x * 30 + 2, 28, 28);
                    break;
                case(4):
                    context.drawImage(metalSprite, y * 30 + 2, x * 30 + 2, 28, 28);
                    break;
                default:
                    if (charRun % 2 == 0)
                        context.drawImage(charSprite, y * 30 + 2, x * 30 + 2, 30, 30);
                    else
                        context.drawImage(charSprite2, y * 30 + 2, x * 30 + 2, 30, 30);
                    break;
            }

        }
}

function startGame() {
    // Generates an empty Matrix on memory
    var canvas = document.getElementById("canvas");

    var x = 0;
    var y = 0;

    for (x = 0; x < tamanhoMatriz; x++)
        matriz[x] = new Array(tamanhoMatriz);

    // Matrix init
    for (x = 0; x < tamanhoMatriz; x++)
        for (y = 0; y < tamanhoMatriz; y++)
            matriz[x][y] = 'background';

    context = canvas.getContext("2d");

    setTimeout(resetValues, 1005);
    setInterval(timer, 1000);

    document.addEventListener("keydown", controls, false);
}