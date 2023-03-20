
document.body.onload = addElement;

function addElement() {
  // create a new div element
    const divContainer = document.createElement("div");
    divContainer.className = "container";
    const screen = document.createElement("input");
    screen.setAttribute =("type","text");
    screen.classList ="typing-input";
    const newDiv = document.createElement("div")
    newDiv.className = "div1"
    const newDiv2 = document.createElement("div")
    newDiv2.className = "div2"
    const newDiv3 = document.createElement("div")
    newDiv3.className = "div3"
    const newDiv4 = document.createElement("div")
    newDiv4.className = "div4"
    const newDiv5 = document.createElement("div");
    newDiv5.className = "div5"
  // Création de button
    const newBttn = document.createElement("button");

;
    
    
    function CreateNewButton() {

        for (let i = 0; i < 4; i++) {
            const newBttn = document.createElement("button");
            newBttn.classList = "bttn"
            newDiv.appendChild(newBttn);
    
        }

        for (let i = 0; i < 4; i++) {
            const newBttn = document.createElement("button");
            newBttn.classList = "bttn"
            newDiv2.appendChild(newBttn);
    
        }

        for (let i = 0; i < 4; i++) {
            const newBttn = document.createElement("button");
            newBttn.classList = "bttn"
            newDiv3.appendChild(newBttn);
    
        }

        for (let i = 0; i < 4; i++) {
            const newBttn = document.createElement("button");
            newBttn.classList = "bttn"
            newDiv4.appendChild(newBttn);
    
        }

        for (let i = 0; i < 4; i++) {
            const newBttn = document.createElement("button");
            newBttn.classList = "bttn"
            newDiv5.appendChild(newBttn);
    
        }

        
  // add the text node to the newly created div
    divContainer.appendChild(screen);
    
    divContainer.appendChild(newDiv);
    divContainer.appendChild(newDiv2);
    divContainer.appendChild(newDiv3);
    divContainer.appendChild(newDiv4);
    divContainer.appendChild(newDiv5)


    }
    CreateNewButton()

    
    
    

  // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(divContainer, currentDiv);


    function AllTogether() {

        // Bouton 1ère rangée

        let addContent = document.querySelector(".container div:nth-child(2) button:nth-child(1)");
        // Ajouter du texte dans les boutons
        addContent.innerHTML = "AC";
        addContent.className="Clear"
        addContent.setAttribute("data-key", "8");
        addContent = document.querySelector(".div1:nth-child(2) button:nth-child(2)");
        addContent.innerHTML = "(";
        addContent.setAttribute("data-key", "53");
        addContent = document.querySelector(".div1:nth-child(2) button:nth-child(3)");
        addContent.innerHTML = ")";
        addContent.setAttribute("data-key", "219");
        addContent = document.querySelector(".div1:nth-child(2) button:nth-child(4)");
        addContent.innerHTML = "/";
        addContent.setAttribute("data-key", "111");

        // Bouton 2ème rangée

        addContent = document.querySelector(".div2:nth-child(3) button:nth-child(1)");
        // Ajouter du texte dans les boutons
        addContent.innerHTML = "7";
        addContent.setAttribute("data-key", "103");
        addContent = document.querySelector(".div2:nth-child(3) button:nth-child(2)");
        addContent.innerHTML = "8";
        addContent.setAttribute("data-key", "104");
        addContent = document.querySelector(".div2:nth-child(3) button:nth-child(3)");
        addContent.innerHTML = "9";
        addContent.setAttribute("data-key", "105");
        addContent = document.querySelector(".div2:nth-child(3) button:nth-child(4)");
        addContent.innerHTML = "*";
        addContent.setAttribute("data-key", "106");
        
         // Bouton 3ème rangée

        addContent = document.querySelector(".div3:nth-child(4) button:nth-child(1)");
        // Ajouter du texte dans les boutons
        addContent.innerHTML = "4";
        addContent.setAttribute("data-key", "100");
        addContent = document.querySelector(".div3:nth-child(4) button:nth-child(2)");
        addContent.innerHTML = "5";
        addContent.setAttribute("data-key", "101");
        addContent = document.querySelector(".div3:nth-child(4) button:nth-child(3)");
        addContent.innerHTML = "6";
        addContent.setAttribute("data-key", "102");
        addContent = document.querySelector(".div3:nth-child(4) button:nth-child(4)");
        addContent.innerHTML = "-";
        addContent.setAttribute("data-key", "109");

           // Bouton 4ème rangée
        addContent = document.querySelector(".div4:nth-child(5) button:nth-child(1)");
        // Ajouter du texte dans les boutons
        addContent.innerHTML = "1";
        addContent.setAttribute("data-key", "97");
        addContent = document.querySelector(".div4:nth-child(5) button:nth-child(2)");
        addContent.innerHTML = "2";
        addContent.setAttribute("data-key", "98");
        addContent = document.querySelector(".div4:nth-child(5) button:nth-child(3)");
        addContent.innerHTML = "3";
        addContent.setAttribute("data-key", "99");
        addContent = document.querySelector(".div4:nth-child(5) button:nth-child(4)");
        addContent.innerHTML = "+";
        addContent.setAttribute("data-key", "107");

         // Bouton 5ème rangée
        addContent = document.querySelector(".div5:nth-child(6) button:nth-child(1)");
        // Ajouter du texte dans les boutons
        addContent.innerHTML = "0";
        addContent.setAttribute("data-key", "96");
        addContent = document.querySelector(".div5:nth-child(6) button:nth-child(2)");
        addContent.innerHTML = ".";
        addContent.setAttribute("data-key", "110");
        addContent = document.querySelector(".div5:nth-child(6) button:nth-child(3)");
        addContent.innerHTML = "H";
        addContent.setAttribute("data-key", "72");
        addContent = document.querySelector(".div5:nth-child(6) button:nth-child(4)");
        addContent.innerHTML = "=";
        addContent.setAttribute("data-key", "13");
        addContent.className="Equal";
        console.log(addContent);
    }

    AllTogether()


// Permettre d'afficher des nombres
    function addToInput(event){
        let button = event.target;
        alert(button.innerHTML) 
        let element = document.getElementsByClassName('typing-input');
        // element.value = element.value + button.innerHTML; 
        element.value = element.value + button.innerHTML
        alert(element.value);
    }
        
    let buttons = document.querySelectorAll('.bttn');
    for (const element of buttons)
    {
        element.addEventListener('click', addToInput);
    }

    //Permettre d'effacer les Nombres
    const button = document.querySelector('.Clear');
    button.onclick = function() {
        document.querySelector("#typing-input").value = "";
    }
    
    //Permet de calculer toutes les chaines de caractères dans l'input
    const result = document.querySelector('.equal-btn');
    result.onclick = function showResult(){
    let input = document.getElementById("typing-input");
    let contenu = input.value;
    let result = eval(contenu);
    let div = document.getElementById("result-div");
    div.innerHTML = result;
    }
    //Nombre négatif
    const negativity = document.querySelector(".negativy");
    negativity.onclick = function opposite(){
    if( document.getElementById("typing-input").value > 0) {
        document.getElementById("typing-input").value = -document.getElementById("typing-input").value;
    }
    else{
    document.getElementById("typing-input").value =  "+" +    (document.getElementById("typing-input").value)
    }
    console.log("Ok")
    }




    }


    




