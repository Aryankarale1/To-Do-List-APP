const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");
const emojiPicker = document.getElementById("emoji-picker");

function Addtask() {

    const taskText = inputBox.value.trim();

    if (taskText === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = `${emojiPicker.value} ${taskText}`;

    let span = document.createElement("span");
    span.textContent = "\u00d7";

    li.appendChild(span);
    list.appendChild(li);

    inputBox.value = "";

    saveData();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();