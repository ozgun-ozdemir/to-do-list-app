document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new list item
    const li = document.createElement('li');

    // Create the task text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Create the button container div
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    // Create the "Delete" button with Font Awesome "X" icon
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'; // Font Awesome "times" icon X
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Create the "Complete" button with Font Awesome "check" icon
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'; // Font Awesome "check" icon
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Append the buttons to the button container
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    // Append the task text and buttons container to the list item
    li.appendChild(span);
    li.appendChild(btnContainer);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
    taskInput.focus();
}
