document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.textContent = `* ${taskText}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
});