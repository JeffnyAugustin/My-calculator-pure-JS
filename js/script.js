// container contenant titre + la calculatrice

const hugeTitle = document.createElement("div");
hugeTitle.id = "myTitle";

const title = document.createElement("h1");
title.id = "titre";
title.textContent = "My Calculator";

// container va contenir tous mes élements

const divContain = document.getElementById("container");

// Création div ecran 

const ecran = document.createElement("div");
ecran.id = "screen";

// Création div qui va contenir tous mes boutons
const touches = document.createElement("div");
touches.id = "touches";


// Création rangée 1 

const rangee1 = document.createElement("div");
rangee1.id = "row1";


// Bouton Clear
const clear = document.createElement('button');
clear.id = 'clear';
clear.className = 'bouton';
clear.textContent = 'C';
clear.setAttribute("data-key", "8");

// Bouton parenthèse gauche
const parentleft = document.createElement('button');
parentleft.id = 'parentleft';
parentleft.className = 'bouton';
parentleft.textContent = '(';
parentleft.setAttribute("data-key", "57");

// Bouton parenthèse droite
const parentright = document.createElement('button');
parentright.id = 'parentright';
parentright.className = 'bouton';
parentright.textContent = ')';
parentright.setAttribute("data-key", "219");

// Bouton division
const divide = document.createElement('button');
divide.id = 'divide';
divide.className = 'bouton';
divide.textContent = '/';
divide.setAttribute("data-key", "111");


// Création rangée 2 

const rangee2 = document.createElement("div");
rangee2.id = "row2";

// Bouton 7
const seven = document.createElement('button');
seven.id = 'seven';
seven.className = 'bouton';
seven.textContent = '7';
seven.setAttribute("data-key", "103");

// Bouton 8
const height = document.createElement('button');
height.id = 'height';
height.className = 'bouton';
height.textContent = '8';
height.setAttribute("data-key", "104");

// Bouton 9
const nine = document.createElement('button');
nine.id = 'nine';
nine.className = 'bouton';
nine.textContent = '9';
nine.setAttribute("data-key", "105");

// Bouton multiplication
const multiply = document.createElement('button');
multiply.id = 'multiply';
multiply.className = 'bouton';
multiply.textContent = '*';
multiply.setAttribute("data-key", "106");

// Création rangée 3 

const rangee3 = document.createElement("div");
rangee3.id = "row3";

// Bouton 4
const four = document.createElement('button');
four.id = 'four';
four.className = 'bouton';
four.textContent = '4';
four.setAttribute("data-key", "100");

// Bouton 5
const five = document.createElement('button');
five.id = 'five';
five.className = 'bouton';
five.textContent = '5';
five.setAttribute("data-key", "101");;

// Bouton 6
const six = document.createElement('button');
six.id = 'six';
six.className = 'bouton';
six.textContent = '6';
six.setAttribute("data-key", "102");

// Bouton multiplication
const minus = document.createElement('button');
minus.id = 'minus';
minus.className = 'bouton';
minus.textContent = '-';
minus.setAttribute("data-key", "109");

// Création rangée 4 

const rangee4 = document.createElement("div");
rangee4.id = "row4";

// Bouton 1
const one = document.createElement('button');
one.id = 'one';
one.className = 'bouton';
one.textContent = '1';
one.setAttribute("data-key", "97");

// Bouton 2
const two = document.createElement('button');
two.id = 'two';
two.className = 'bouton';
two.textContent = '2';
two.setAttribute("data-key", "98");

// Bouton 3
const three = document.createElement('button');
three.id = 'three';
three.className = 'bouton';
three.textContent = '3';
three.setAttribute("data-key", "99");

// Bouton +
const plus = document.createElement('button');
plus.id = 'plus';
plus.className = 'bouton';
plus.textContent = '+';
plus.setAttribute("data-key", "107");



// Création rangée 5

const rangee5 = document.createElement("div");
rangee5.id = "row5";

// Bouton 0
const zero = document.createElement('button');
zero.id = 'one';
zero.className = 'bouton';
zero.textContent = '0';
zero.setAttribute("data-key", "96");

// Bouton .
const point = document.createElement('button');
point.id = 'two';
point.className = 'bouton';
point.textContent = '.';
point.setAttribute("data-key", "110");

// Bouton %
const percent = document.createElement('button');
percent.id = 'percent';
percent.className = 'bouton';
percent.textContent = '%';
percent.setAttribute("data-key", "53");

// Bouton equal
const equal = document.createElement('button');
equal.id = 'equal';
equal.className = 'bouton';
equal.textContent = '=';
equal.setAttribute("data-key", "13");


hugeTitle.append(title, divContain)
divContain.append(ecran, touches);
touches.append(rangee1, rangee2, rangee3, rangee4, rangee5);
rangee1.append(clear, parentleft, parentright, divide);
rangee2.append(seven, height, nine, multiply);
rangee3.append(four, five, six, minus);
rangee4.append(one, two, three, plus);
rangee5.append(zero, point, percent, equal);
document.body.append(hugeTitle);



// Récuperer les valeurs au click ou à l'appui sur une touche
const touche = [...document.querySelectorAll('.bouton')]
const listeKeycode = touche.map(touches => touches.dataset.key);


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
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touches = touche[indexKeycode];
                ecran.textContent += touches.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
}) 
