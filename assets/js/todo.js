
let input = document.querySelector('#InputData');
let addTaskBtn = document.querySelector('#AddTask');
let deleteAllTasks = document.querySelector('#DeleteAll');
let saveTask = document.querySelector('#SaveTask');



addTaskBtn.addEventListener('click', () => {
    const data = input.value;
    if (data == '') {
        alert('please enter the task');
    }
    else {
        let localData = localStorage.getItem('taskData');
        if (localData == null) {
            let taskArray = [];
            taskArray.push(data);
            localStorage.setItem('taskData', JSON.stringify(taskArray))
        }
        else {
            let taskArray = JSON.parse(localData);
            taskArray.push(data);
            localStorage.setItem('taskData', JSON.stringify(taskArray))
        }
    }
    location.reload();
});
