function mathOperation(arg1, arg2, operation) {
    operation = prompt("Введите одну из типов арифметических операций: сложение, вычетание, деление, умножение", "сложение");
    switch (operation) {
        case "сложение":
        case "Сложение":
        case "+":
            document.write("Результат Сложение: " + (+arg1 + +arg2) + "<br />");
            break;
        case "вычетание":
        case "Вычетание":
        case "-":
            document.write("Результат Вычетание: " + (arg1 - arg2) + "<br />");
            break;
        case "Умножение":
        case "умножение":
        case "*":
            document.write("Результат Умножение: " + arg1 * arg2 + "<br />");
            break;
        case "Деление":
        case "деление":
        case "/":
            document.write("Результат Деление: " + arg1 / arg2 + "<br />");
            break;
        default:
            document.write("Такой операции я не знаю")
    }
}

var a = parseInt(prompt("Введите любое число"));
var b = parseInt(prompt("Введите любое число"));


document.write("Числа " + a + " и " + b + "<br />");
mathOperation(a,b);