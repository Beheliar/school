var DEGREES_RATE = 1.8;

var howManyDegrees = ""; // Количество градусов

var coms = prompt("Введите название шкалы измерения градусов цельсий или фаренгейт: ", "Цельсий"); /*choice of measurement system | выбор системы измерения*/

if(coms == "Цельсий" || coms == "цельсий") {
    howManyDegrees = prompt("Введите количество градусов цельсия: ");
    document.write("<h1><center>" + (+howManyDegrees * DEGREES_RATE + 32) + " &deg;C" + "</center></h1>");
}
else if(coms == "Фаренгейт" || coms == "фаренгейт") {
    howManyDegrees = prompt("Введите количество градусов фаренгейт: ");
    document.write("<h1><center>" + ((+howManyDegrees - 32) / DEGREES_RATE)  + " &deg;F" + "</center></h1>");
}
else {
    alert("Данная система измерения температуры, мне не известна. Извините!");
}