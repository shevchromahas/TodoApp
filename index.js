///////  1

/* const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const btn = document.querySelector('.button')

function addTask() {
    if (inputBox.value === '') {
        alert('The field dont be empty ')
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '&times;'
        li.appendChild(span)
    }
    inputBox.value = ''
}

btn.addEventListener('click', addTask)

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
}, false) */


/////////  2

const news = document.getElementById('input-box')
const taskContainer = document.getElementById('list-container')
const taskCount = document.getElementById('task-count')
const add = document.querySelector('.button')

const tasks = []

function addTask(text, list) {
    const newId = Date.now()

    const newTask = {
        id: newId,
        text: text,
        completed: false
    }
    list.push(newTask)
    tasksRender(tasks)
}

function addNewTask() {
    let taskText = news.value
    if (taskText && isNotHaveTask(tasks, taskText)) {
        addTask(taskText, tasks)
        news.value = ''
    }
}

add.addEventListener('click', addNewTask)

function isNotHaveTask(list, text) {
    let isNotHave = true

    list.forEach(task => {
        if (task.text === text) {
            alert('The task already exists')
            isNotHave = false
        }
    })
    return isNotHave;
}

function tasksRender(list) {
    let htmlList = ''

    list.forEach(task => {
        const cls = task.completed ? 'app__task checked' : 'app__task'

        let taskHTML = `
        <li id="${task.id}" class="${cls}">
           <p>${task.text}</p>
           <span class="remove">&times;</span>
        </li>`

        htmlList = htmlList + taskHTML
    })
    taskContainer.innerHTML = htmlList
    renderTaskCount(tasks)
}



taskContainer.addEventListener('click', function (e) {
    if (e.target.parentNode.classList.contains('app__task')) {
        e.target.parentNode.classList.toggle('checked')
    }
     if (e.target.classList.contains('remove')) {
        const task = e.target.parentNode;
        const taskId = task.getAttribute('id')
        deleteTask(taskId, tasks)
        tasksRender(tasks)
    }
})

function deleteTask(id, list) {
    console.log(id)
    list.forEach((task, idx) => {
        if (task.id == id) {
           list.splice(idx, 1)
        }
    })
}

function renderTaskCount(list){
   taskCount.innerHTML = list.length
}




