
const inputValue = document.getElementById(`input`);
const container = document.querySelector(`.container`);
const taskContainer = document.querySelector(`#task-container`);


// adding new task
function addTask(){
    if(inputValue.value.length === 0){
        alert("Please enter a Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = ` <input type="checkbox" class="checkbox">
                         <span class="task">${inputValue.value}</span> 
                         <button class="delete" onclick="remove()"><i class="fa-solid fa-trash-can fa-1.5x" id="delete"></i></button>`
         taskContainer.appendChild(li);
         
    }
    inputValue.value = "";
    
}
// removing element
function remove(){
    taskContainer.removeChild(taskContainer.children[0]);
}


