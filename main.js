// Get the "+" button element
const newTaskButton = document.getElementById("new-task");

function newTaskPrompt() {
    console.log("New Task Button Clicked")

    const container = document.getElementById('container')                      //3rd grade element
    const newTaskPrompt = document.createElement('div')                         //2nd grade element
    newTaskPrompt.id = 'new-task-prompt'
    newTaskPrompt.classList.add('new-task-prompt')
    const newTaskDiv = document.createElement('div')                            //1st grade element
    newTaskDiv.classList.add('new-task-div')

    const newTaskTitle = document.createElement('input')                        //leaf grade element
    newTaskTitle.placeholder = "Enter task title"
    newTaskTitle.classList.add('new-task-title')

    const newTaskDescription = document.createElement('textarea')               //leaf grade element
    newTaskDescription.placeholder = "Enter task description"
    newTaskDescription.classList.add('new-task-desc')

    // Put the leaf grade elements - 'newTaskTitle' and 'newTaskDescription' inside 1st grade 'newTaskDiv'
    newTaskDiv.appendChild(newTaskTitle)
    newTaskDiv.appendChild(newTaskDescription)

    // Create a div for save button and delete prompt button
    const buttonsDiv = document.createElement('div')                            //1st grade element
    buttonsDiv.classList.add('btn-div')

    const saveButton = document.createElement('button')                         //leaf grade element
    saveButton.classList.add('btn', 'save-btn')
    saveButton.innerHTML = '<img class="w-6 h-6"  src="./icon/save black icon.png" alt="Save Button"></img>'

    const deleteButton = document.createElement('button')                     //leaf grade element
    deleteButton.classList.add('btn', 'del-btn')
    deleteButton.innerHTML = '<img class="w-6 h-6" src="./icon/bin.png" alt="Delete Button"></img>'

    // Put the leaf grade elements - save button and delete button inside 1st grade 'buttonsDiv'
    buttonsDiv.appendChild(saveButton)
    buttonsDiv.appendChild(deleteButton)

    // Put the 1st grade elements - newTaskDiv and buttonsDiv inside the 2nd grade 'newTaskPrompt'
    newTaskPrompt.appendChild(newTaskDiv)
    newTaskPrompt.appendChild(buttonsDiv)

    // Put the 2st grade element - 'newTaskPrompt' inside the 3rd grade 'Container'
    container.appendChild(newTaskPrompt)

    // Create a 'click' event listener on the save button  
    saveButton.addEventListener('click', () => {
        console.log('Save Button clicked')
        const titleInput = newTaskTitle.value
        const descriptionInput = newTaskDescription.value

        // call the saveNewTask() function and it will do it's part of job 
        saveNewTask(titleInput, descriptionInput)
        newTaskPrompt.remove()
    })
}

function deleteTask() {

    const deleteButtons = document.querySelectorAll('.del-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const li = event.target.parentNode.parentNode // Get the parent li element
            li.remove(); // Remove the li element
        })
    })
}

function saveNewTask(titleInput, descriptionInput) {

    const ul = document.querySelector("ul")

    const li = document.createElement('li')
    li.classList.add('grid-div')

    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task-div')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    let taskTitle = document.createElement('h1')
    taskTitle.classList.add('task-title')
    taskTitle.type = 'text'

    let taskDesc = document.createElement('p')
    taskDesc.classList.add('task-desc')

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<img class="w-6 h-6" src="./icon/bin.png" alt="Delete Button"></img>'
    deleteButton.classList.add('del-btn', 'btn')

    taskTitle.innerText = titleInput
    taskDesc.innerText = descriptionInput

    ul.appendChild(li)

    li.appendChild(taskDiv)
    li.appendChild(deleteButton)

    taskDiv.appendChild(checkbox)
    taskDiv.appendChild(taskTitle)
    taskDiv.appendChild(taskDesc)

    deleteButton.addEventListener('click', () => {
        li.remove(); // Remove the li element
    });

}

function strikeTaskTitle() {
    const checkBoxes = document.querySelectorAll('input[type=checkbox]')
    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('click', () => {
            const taskTitle = checkBox.nextElementSibling
            if (checkBox.checked) {
                taskTitle.classList.add('line-through')
            } else {
                taskTitle.classList.remove('line-through')
            }
        })
    })
}

strikeTaskTitle()
deleteTask()
newTaskButton.addEventListener('click', newTaskPrompt)
newTaskPrompt()