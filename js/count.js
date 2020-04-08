var number = 0;

function countUp() {
    number++;
    var label = document.getElementById('label');
    label.textContent = String(number);
}

function countDown() {
    number--;
    var label = document.getElementById('label');
    label.textContent = String(number);
}