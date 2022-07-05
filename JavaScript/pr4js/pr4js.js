let inputOption = prompt("1-Сумма, 2-Разница, 3-Умножение, 4-Деление",0);
let inputX;
let inputY;

switch(Number(inputOption))
{
    case 1:
        inputX = prompt("Введите первое число", 0);
        inputY = prompt("Введите второе число", 0);
        let sum = Number(inputX) + Number(inputY);
        alert(`${Number(inputX)} + ${Number(inputY)} = ${sum}`);
        break;
    case 2:
        inputX = prompt("Введите первое число", 0);
        inputY = prompt("Введите второе число", 0);
        let dif = Number(inputX) - Number(inputY);
        alert(`${Number(inputX)} - ${Number(inputY)} = ${dif}`);
        break;
    case 3:
        inputX = prompt("Введите первое число", 0);
        inputY = prompt("Введите второе число", 0);
        let mult = Number(inputX) * Number(inputY);
        alert(`${Number(inputX)} * ${Number(inputY)} = ${mult}`);
        break;
    case 4:
        inputX = prompt("Введите первое число", 0);
        inputY = prompt("Введите второе число", 0);
        let div = Number(inputX) / Number(inputY);
        alert(`${Number(inputX)} / ${Number(inputY)} = ${div}`);
        break;
    default:
        alert(`Нет такого варианта выбора!`);
        break;
}