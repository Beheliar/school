var a, b, c;
function calcD(a, b, c) {
    return b*b - 4*a*c;
}

a = parseInt(prompt("Введите значение а:"));
b = parseInt(prompt("Введите значение b:"));
c = parseInt(prompt("Введите значение c:"));

var test = calcD(a, b, c);


alert(test);

