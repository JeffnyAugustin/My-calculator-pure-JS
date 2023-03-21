
const calculator = document.querySelector('.calculator');

// l'ecran de la calculatrice
const screen = document.createElement('div');
screen.classList.add('ecran');
calculator.appendChild(screen)

// les touches de la calculatrice
const touch = document.createElement('div');
touch.classList.add('touches');
calculator.appendChild(touch)

// ALL TOUCHES
const clear = document.createElement('button');
clear.classList.add('bouton')
clear.innerText = 'C';
touch.appendChild(clear);
clear.setAttribute("data-key", "8");

const parentleft = document.createElement('button');
parentleft.classList.add('bouton')
parentleft.innerText = '(';
touch.appendChild(parentleft);
parentleft.setAttribute("data-key", "53");

const parentright = document.createElement('button');
parentright.classList.add('bouton')
parentright.innerText = ')';
touch.appendChild(parentright);
parentright.setAttribute("data-key", "219");

const divide = document.createElement('button');
divide.classList.add('bouton')
divide.innerText = '/';
touch.appendChild(divide);
divide.setAttribute("data-key", "111");

const seven = document.createElement('button');
seven.classList.add('bouton')
seven.innerText = '7';
touch.appendChild(seven);
seven.setAttribute("data-key", "103");

const height = document.createElement('button');
height.classList.add('bouton')
height.innerText = '8';
touch.appendChild(height);
height.setAttribute("data-key", "104");

const nine = document.createElement('button');
nine.classList.add('bouton')
nine.innerText = '9';
touch.appendChild(nine);
nine.setAttribute("data-key", "105");

const multiply = document.createElement('button');
multiply.classList.add('bouton')
multiply.innerText = '*';
touch.appendChild(multiply);
multiply.setAttribute("data-key", "106");

const four = document.createElement('button');
four.classList.add('bouton')
four.innerText = '4';
touch.appendChild(four);
four.setAttribute("data-key", "100");

const five = document.createElement('button');
five.classList.add('bouton')
five.innerText = '5';
touch.appendChild(five);
five.setAttribute("data-key", "101");

const six = document.createElement('button');
six.classList.add('bouton')
six.innerText = '6';
touch.appendChild(six);
six.setAttribute("data-key", "102");

const minus = document.createElement('button');
minus.classList.add('bouton')
minus.innerText = '-';
touch.appendChild(minus);
minus.setAttribute("data-key", "109");

const one = document.createElement('button');
one.classList.add('bouton')
one.innerText = '1';
touch.appendChild(one);
one.setAttribute("data-key", "97");

const deux = document.createElement('button');
deux.classList.add('bouton')
deux.innerText = '2';
touch.appendChild(deux);
deux.setAttribute("data-key", "98");

const trois = document.createElement('button');
trois.classList.add('bouton')
trois.innerText = '3';
touch.appendChild(trois);
trois.setAttribute("data-key", "99");

const plus = document.createElement('button');
plus.classList.add('bouton')
plus.innerText = '+';
touch.appendChild(plus);
plus.setAttribute("data-key", "107");

const zero = document.createElement('button');
zero.classList.add('bouton')
zero.innerText = '0';
touch.appendChild(zero);
zero.setAttribute("data-key", "96");

const point = document.createElement('button');
point.classList.add('bouton')
point.innerText = '.';
touch.appendChild(point);
point.setAttribute("data-key", "110");

const history = document.createElement('button');
history.classList.add('bouton')
history.innerText = "H";
touch.appendChild(history);
history.dataset.key;

const equal = document.createElement('button');
equal.classList.add('bouton')
equal.innerText = "=";
touch.appendChild(equal);
equal.setAttribute("data-key", "13");

// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
// const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                screen.textContent = "";
                break;
            case '13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})




