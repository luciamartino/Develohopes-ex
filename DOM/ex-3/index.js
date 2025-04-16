//Creare una lista aggiungendo il task desiderato mediante il bottone Aggiungi.
//Creare un checkbox per ogni task aggiunto

const ul = document.querySelector("ul");
const input = document.querySelector("input");

function addProduct() {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = input.value;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    li.appendChild(checkbox);
}

function removeProduct() {
    ul.lastChild.remove();
}

function toggleButton() {
    const element = document.getElementById("cat-button");
    element.classList.toggle("toggle-class");
}
