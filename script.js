let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendValue(btn) {
    display.value += btn;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(e) {
        display.value = 'Erro!';
    }
}