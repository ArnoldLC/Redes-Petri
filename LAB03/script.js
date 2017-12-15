const token1 = document.getElementById("svg_54");
const token2 = document.getElementById("svg_55");
const token3 = document.getElementById("svg_56");
const token4 = document.getElementById("svg_57");
const token5 = document.getElementById("svg_58");

const token6 = document.getElementById("svg_51");
const token7 = document.getElementById("svg_52");
const token8 = document.getElementById("svg_53");

const patasInput = document.getElementById("patas");
const asientoInput = document.getElementById("asiento");
const espaldaInput = document.getElementById("espalda");
const clavosInput = document.getElementById("clavos");
const martillosInput = document.getElementById("martillo");

const inicio = document.getElementById("init");
const it1 = document.getElementById("it-1");
const it2 = document.getElementById("it-2");
const it3 = document.getElementById("it-3");
const it4 = document.getElementById("it-4");

var patas, asiento, espalda, clavos, martillos, silla = 0, maquina = 1;
var almacen = 0;
var isPosible = true;

var marcacionInicial = [];
var plazaInput = [];
var plazaOutput = [];


let i = 1, k = 1;
btn.addEventListener("click", () => {
    //console.log(patasInput.value + " " + asientoInput.value + " " + espaldaInput.value);
    inicio.style.display = "block";
    patas = patasInput.value;
    asiento = asientoInput.value;
    espalda = espaldaInput.value;
    clavos = clavosInput.value;
    martillos = martillosInput.value;
    marcacionInicial = [patas, asiento, espalda, clavos, martillos, silla, maquina, almacen];
    console.log(marcacionInicial);
    patasInput.setAttribute("disabled", true);
    asientoInput.setAttribute("disabled", true);
    espaldaInput.setAttribute("disabled", true);
    clavosInput.setAttribute("disabled", true);
    martillosInput.setAttribute("disabled", true);
    setToken(i);

});

function setToken(i) {
    if (isPosible) {
        if (i == 1) {
            token1.setAttribute("class", "token-off");
            token2.setAttribute("class", "token-off");
            token3.setAttribute("class", "token-off");
            token4.setAttribute("class", "token-off");
            token5.setAttribute("class", "token-off");
            token6.setAttribute("class", "token-off");
            token7.setAttribute("class", "token-on");
            token8.setAttribute("class", "token-off");
            patas = patas - 4;
            asiento = asiento - 1;
            espalda = espalda - 1;
            clavos = clavos - 6;
            martillos = martillos - 1;
            silla = silla + 1;
            plazaInput = [4, 1, 1, 6, 1, 0, 1, 0];
            plazaOutput = [0, 0, 0, 0 ,0 , 1, 0, 0];
            for(let i = 0; i < marcacionInicial.length; i++) {
                marcacionInicial[i] = marcacionInicial[i] - plazaInput[i] + plazaOutput[i];
            }
            console.log(marcacionInicial+"\n");
            it1.style.display = "block";
            if (k == 2) {
                it3.style.display = "block";
            }
        } else {
            if (i == 2) {
                token1.setAttribute("class", "token-off");
                token2.setAttribute("class", "token-off");
                token3.setAttribute("class", "token-off");
                token4.setAttribute("class", "token-off");
                token5.setAttribute("class", "token-off");
                token6.setAttribute("class", "token-on");
                token7.setAttribute("class", "token-off");
                token8.setAttribute("class", "token-on");
                plazaInput = [0, 0, 0, 0, 0, 1, 0, 0];
                plazaOutput = [0, 0, 0, 0, 0, 0, 1, 1];
                for (let i = 0; i < marcacionInicial.length; i++) {
                    marcacionInicial[i] = marcacionInicial[i] - plazaInput[i] + plazaOutput[i];
                }
                console.log(marcacionInicial + "\n");
                almacen = almacen + 1;
                it2.style.display = "block";
                if (k == 2) {
                    it4.style.display = "block";
                }
            } else {
                token1.setAttribute("class", "token-on");
                token2.setAttribute("class", "token-on");
                token3.setAttribute("class", "token-on");
                token4.setAttribute("class", "token-on");
                token5.setAttribute("class", "token-on");
                token6.setAttribute("class", "token-off");
                token7.setAttribute("class", "token-off");
                token8.setAttribute("class", "token-off");
            }
        }
    }
    i++;
    if (i == 4) {
        i = 1;
        if (patas < 4 || asiento < 1 || espalda < 1 || clavos < 6 || martillos < 1) {
             isPosible = false;
        //     message.classList.remove("hiddenMessage");
        }
        console.log("\nPatas :" + patas +
                    "\nAsiento: " + asiento + 
                    "\nEspalda: " + espalda +
                    "\nClavos: " + clavos + 
                    "\nMartillos: " + martillos + "\n");
        // cantProductos.innerHTML = almacen;
        k++;
    }
    var loop = setTimeout(setToken, 2000, i);
}

function createMatrix () {
    var marcacionIni = document.createElement("ul");
}