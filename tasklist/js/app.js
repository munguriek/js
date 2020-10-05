//Define UI variables
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Function to load all event listeners
function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
    //Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    //Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = "<i class='fa fa-remove'></i>";
    //Append the link to the li
    li.appendChild(link);
    //Append the li to the ul
    tasklist.appendChild(li);
    //Clear input
    taskInput.value = '';
    e.preventDefault();
}