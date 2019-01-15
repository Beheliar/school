function mathOperation(arg1, arg2) {
    document.write("Результат Сложение: " + (+arg1 + +arg2) + "<br />");
    document.write("Результат Вычетание: " + (arg1 - arg2) + "<br />");
    document.write("Результат Умножение: " + arg1 * arg2 + "<br />");
    document.write("Результат Деление: " + arg1 / arg2 + "<br />");
}

var a = prompt("Введите любое число");
var b = prompt("Введите любое число");

var num1 = parseInt(a);
var num2 = parseInt(b);

document.write("Числа " + a + " и " + b + "<br />");
mathOperation(num1,num2);