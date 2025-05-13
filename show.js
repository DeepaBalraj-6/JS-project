function showToDo() {
    document.getElementById("content").innerHTML = `
        <h2>To-Do</h2>
        <input type="text" id="input" placeholder="Enter a task">
        <button id="addBtn">Add</button>
        <ul id="list"></ul>
    `;
    initToDo(); 
}

function showBirthday(){
    document.getElementById('content').innerHTML=`
    <h2>Birthday Reminder</h2>
        <input type="text" id="input" placeholder="Enter Name">
        <input type="date" id="birthdayDate">
        <button id="addBtn">Add</button>
        <ul id="list"></ul>
    `;
    initBirthday();
}
function showCalculator(){
    document.getElementById('content').innerHTML=`
    <h2>Calculator</h2>
    <div class="calculator">
        <input type="text" id="display" readonly>
        <div class="calc-buttons">
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendValue('/')">/</button>
            <button onclick="appendValue('*')">*</button>
            <button onclick="deleteLast()">DEL</button>

            <button onclick="appendValue('7')">7</button>
            <button onclick="appendValue('8')">8</button>
            <button onclick="appendValue('9')">9</button>
            <button onclick="appendValue('-')">-</button>

            <button onclick="appendValue('4')">4</button>
            <button onclick="appendValue('5')">5</button>
            <button onclick="appendValue('6')">6</button>
            <button onclick="appendValue('+')">+</button>

            <button onclick="appendValue('1')">1</button>
            <button onclick="appendValue('2')">2</button>
            <button onclick="appendValue('3')">3</button>
            <button onclick="calculate()">=</button>

            <button onclick="appendValue('0')" class="zero">0</button>
            <button onclick="appendValue('.')">.</button>
        </div>
    </div>
    `;
}
