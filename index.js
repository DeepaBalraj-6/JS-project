function initToDo() {
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('input');
    const taskList = document.getElementById('list');

    addBtn.addEventListener('click', function () {
        const task = taskInput.value.trim();
        if (task !== "") {
            const li = document.createElement('li');
            const taskText = document.createElement('span');
            taskText.textContent = task;

            const buttons = document.createElement('div');
            buttons.classList.add('task-buttons');

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => li.remove();

            const updateBtn = document.createElement('button');
            updateBtn.textContent = 'Update';
            updateBtn.classList.add('update-btn');
            updateBtn.onclick = () => {
                const newTask = prompt("Update your task:", taskText.textContent);
                if (newTask && newTask.trim() !== "") {
                    taskText.textContent = newTask.trim();
                }
            };

            buttons.appendChild(updateBtn);
            buttons.appendChild(deleteBtn);

            li.appendChild(taskText);
            li.appendChild(buttons);
            taskList.appendChild(li);

            taskInput.value = "";
        } else {
            alert("Please enter a task");
        }
    });
}

function initBirthday() {
    const addBtn = document.getElementById('addBtn');
    const nameInput = document.getElementById('input');
    const dateInput = document.getElementById('birthdayDate');
    const birthdayList = document.getElementById('list');

    addBtn.addEventListener('click', function () {
        const name = nameInput.value.trim();
        const date = dateInput.value;

        if (name !== "" && date !== "") {
            const li = document.createElement('li');
            const birthdayText = document.createElement('span');
            birthdayText.textContent = `${name} - ${date}`;

            const buttons = document.createElement('div');
            buttons.classList.add('task-buttons');

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = () => li.remove();

            const updateBtn = document.createElement('button');
            updateBtn.textContent = 'Update';
            updateBtn.classList.add('update-btn');
            updateBtn.onclick = () => {
                const newName = prompt("Update name:", name);
                const newDate = prompt("Update date (YYYY-MM-DD):", date);
                if (newName && newDate) {
                    birthdayText.textContent = `${newName.trim()} - ${newDate}`;
                }
            };

            buttons.appendChild(updateBtn);
            buttons.appendChild(deleteBtn);

            li.appendChild(birthdayText);
            li.appendChild(buttons);
            birthdayList.appendChild(li);

            nameInput.value = "";
            dateInput.value = "";
        } else {
            alert("Please enter name and date");
        }
    });
}

function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert("Invalid Expression");
    }
}
