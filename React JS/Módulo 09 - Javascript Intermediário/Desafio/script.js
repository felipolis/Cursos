var tasks = [];

let btnAddTask = document.querySelector('.addTask');
let btnClearAllTasks = document.querySelector('.removeAllTasks');
let weekDaytext = document.querySelector('#weekDay');
let hoursText = document.querySelector('#hours');

let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date();
let formatDate = `, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

var wrapperContentTasks = document.querySelector('.tasks');
var inputTask = document.querySelector('input[type=text]');
var NTasks = document.querySelector('#taskNumber');

onload = function(){

    hoursText.innerHTML = formatDate;
    weekDaytext.innerHTML = week[d.getDay()];

    if(JSON.parse(localStorage.getItem('tasks'))){
        tasks = JSON.parse(localStorage.getItem('tasks'));
        inputTasks();
    }

    verifyTask();
    nuTasks();

}

function inputTasks(){
    wrapperContentTasks.innerHTML = '';
    tasks.map((e,index)=>{
        wrapperContentTasks.innerHTML +=`
            <div class="task-single">
                <div class="one">
                    <i class="fas fa-check" onclick=(checkItem(${index}))></i>
                    <p>${e}</p>
                </div>
                <div class="two">
                    <i class="fas fa-trash" onclick=(delItem(${index})) title="Remover task"></i>
                </div>
            </div>
        `
    })
}

function delItem(i){
    tasks.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    inputTasks();
    verifyTask();
    nuTasks();
}

function checkItem(i){
    if(tasks[i].includes('<strike>')){
        tasks[i] = tasks[i].replace('<strike>', '');
        tasks[i] = tasks[i].replace('</strike>', '');
    } else{
        tasks[i] = `<strike> ${tasks[i]} </strike>`;
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    inputTasks();
}

function nuTasks(){
    NTasks.innerHTML = tasks.length;
}

function verifyTask(){
    tasks.length ? btnClearAllTasks.style.display = 'block' : btnClearAllTasks.style.display = 'none';
}

let addTask = function(){
    if(inputTask.value){
        tasks.push(inputTask.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        inputTask.value = '';
        inputTasks();
        verifyTask();
        nuTasks();
    } else{
        alert('Please, type a task');
        return;
    }
}

let removeAllTasks = function(){
    if(tasks.length > 0){
        tasks = [];
        localStorage.clear('tasks');
        inputTasks();
        nuTasks();
        verifyTask();
    } else{
        alert('There are no tasks to delete');
    }
}

btnAddTask.addEventListener('click', addTask);
btnClearAllTasks.addEventListener('click', removeAllTasks);