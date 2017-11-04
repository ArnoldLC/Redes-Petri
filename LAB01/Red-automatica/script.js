const button = document.getElementById('btn');
const token1 = document.getElementById('svg_29');
const token2 = document.getElementById('svg_30');
const token3 = document.getElementById('svg_31');
const token4 = document.getElementById('svg_32');
const token5 = document.getElementById('svg_33');
const radio = document.getElementsByName('simulacion');

let i = 1;
btn.addEventListener("click", () => {

    setToken(i);
    
});

function setToken (i) {
    if(i == 1) {
        token1.setAttribute("class", "token-off");
        token2.setAttribute("class", "token-on");
    } else {
        if (i == 2) {
            token2.setAttribute("class", "token-off");
            token3.setAttribute("class", "token-on");
        } else {
            if (i == 3) {
                token3.setAttribute("class", "token-off");
                if (radio[0].checked == true) {
                    token4.setAttribute("class", "token-on");
                }
                else {
                    token5.setAttribute("class", "token-on");
                }
            } else {
                if (radio[0].checked == true) {
                    token4.setAttribute("class", "token-off");
                    token1.setAttribute("class", "token-on");
                } else {
                    token5.setAttribute("class", "token-off");
                    token1.setAttribute("class", "token-on");
                }
            }
        }
    }
    i++;
    if (i == 5) {
        i = 1;
    }
    var loop = setTimeout(setToken, 3000, i);
}