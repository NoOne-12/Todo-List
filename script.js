const input = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addTask(){
    if (input.value === ''){
        alert("Write a task, please!");
    } else {
        let li = document.createElement("li");
        li.innerText = input.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData();
    }
    input.value = "";
}

list.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("tasks", list.innerHTML);
}

function showTasks(){
    list.innerHTML = localStorage.getItem("tasks");
}

showTasks();
