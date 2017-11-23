const token1 = document.getElementById("svg_29");
const token2 = document.getElementById("svg_30");
const token3 = document.getElementById("svg_31");
const token4 = document.getElementById("svg_32");
const token5 = document.getElementById("svg_33");
const token6 = document.getElementById("svg_34");

const consInput = document.getElementById("conservante");
const espInput = document.getElementById("esparrago");
const frascInput = document.getElementById("frasco");
const message = document.getElementById("message");
const cantProductos = document.getElementById("cant-productos");

var conservante;
var esparrago;
var frasco;
var almacen = 0;
var isPosible = true;

let i = 1;
btn.addEventListener("click", () => {
    console.log(consInput.value + " " + espInput.value + " " + frascInput.value);
    conservante = consInput.value;
    esparrago = espInput.value;
    frasco = frascInput.value;
    consInput.setAttribute("disabled", true);
    espInput.setAttribute("disabled", true);
    frascInput.setAttribute("disabled", true);
    setToken(i);

});

function setToken(i) {
    if (isPosible) {
        if (i == 1) {
            token1.setAttribute("class", "token-off");
            token2.setAttribute("class", "token-off");
            token3.setAttribute("class", "token-off");
            token4.setAttribute("class", "token-off");
            token5.setAttribute("class", "token-on");
            token6.setAttribute("class", "token-off");
            conservante = conservante - 1;
            esparrago = esparrago - 4;
            frasco = frasco - 1;
        } else {
            if (i == 2) {
                token1.setAttribute("class", "token-off");
                token2.setAttribute("class", "token-off");
                token3.setAttribute("class", "token-off");
                token4.setAttribute("class", "token-on");
                token5.setAttribute("class", "token-off");
                token6.setAttribute("class", "token-on");
                almacen = almacen + 1;
            } else {
                token1.setAttribute("class", "token-on");
                token2.setAttribute("class", "token-on");
                token3.setAttribute("class", "token-on");
                token4.setAttribute("class", "token-on");
                token5.setAttribute("class", "token-off");
                token6.setAttribute("class", "token-off");
            }
        }
    }
    i++;
    if (i == 4) {
        i = 1;
        if (conservante < 1 || esparrago < 4 || frasco < 1) {
            isPosible = false;
            message.classList.remove("hiddenMessage");
        }
        console.log("\nProductos :" + almacen);
        console.log("Conservante: " + conservante + 
                    "\nEspárrago: " + esparrago +
                    "\nFrasco: " + frasco + "\n");
        cantProductos.innerHTML = almacen;
    }
    var loop = setTimeout(setToken, 2000, i);
}