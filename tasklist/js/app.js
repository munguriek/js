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
    //Remove task event
    tasklist.addEventListener('click', removeTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTasks);
    //Filter task event
    filter.addEventListener('keyup', filterTasks);
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

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

//Clear Tasks
function clearTasks(){
    // tasklist.innerHTML = '';
    //Faster method is with this loop
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
}

//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}