// Übung 10.14.A.01
// Aufgabe: DOM

// Entwickle eine kleine Webanwendung, die eine dynamische Benutzeroberfläche zur Verwaltung einer ToDo-Liste ermöglicht. Die Anwendung soll folgende Funktionalitäten bieten: 
// a) Ein Textfeld und einen Button, um neue ToDo-Elemente zur Liste hinzuzufügen. Jedes ToDo-Element soll als Objekt in einem Array gespeichert werden. 
//    Jedes Objekt enthält zwei Eigenschaften: id (eindeutige Identifikationsnummer) und text (der Text des ToDo-Elements). 
// b) Eine Darstellung der ToDo-Liste im DOM, wobei jedes Element der Liste ein li-Element innerhalb eines ul-Elements ist. Verwende document.createElement und appendChild, um die li-Elemente dynamisch zu erstellen und ins DOM einzufügen. 
// c) Die Möglichkeit, ein ToDo-Element aus der Liste zu entfernen, indem ein "Löschen"-Button neben jedem ToDo-Element angezeigt wird. 
//    Beim Klicken auf den "Löschen"-Button soll das entsprechende li-Element aus dem DOM entfernt und das Objekt aus dem Array gelöscht werden. 
// d) Eine Funktion, die die Hintergrundfarbe der li-Elemente abwechselnd setzt, um eine gestreifte Liste zu erzeugen. Verwende CSS-Klassen und ändere die Klassen der li-Elemente, sobald ein neues Element hinzugefügt oder ein Element entfernt wird.  


let todoList = [];
let todoId = 0;

const inputField = document.createElement("input");
inputField.type = "text";
inputField.id = "todo-input";
document.body.appendChild(inputField);

const addButton = document.createElement("button");
addButton.innerText = "Add ToDo";
document.body.appendChild(addButton);

const todoUl = document.createElement("ul");
document.body.appendChild(todoUl);

function aktualisiereListe() {
    todoUl.innerHTML = "";
    todoList.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerText = todo.text;
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Löschen";
        deleteButton.onclick = () => {
            todoList = todoList.filter(t => t.id !== todo.id);
            aktualisiereListe();
        };
        li.appendChild(deleteButton);
        if (index % 2 === 0) {
            li.classList.add("even");
        } else {
            li.classList.add("odd");
        }
        todoUl.appendChild(li);
    });
}

addButton.onclick = () => {
    const todoText = inputField.value.trim();
    if (todoText !== "") {
        todoList.push({ id: todoId++, text: todoText });
        inputField.value = "";
        aktualisiereListe();
    }
}

const style = document.createElement("style");
style.innerHTML = `
    .even { background-color: #f0f0f0; }
    .odd { background-color: #ffffff; }
`;
document.head.appendChild(style);

aktualisiereListe();

