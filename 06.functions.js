console.log('Topic: Functions');

// Task 1. FDS
// RU: Создайте функцию conc, которая должна конкатенировать значения
//     двух параметров a и b и возвращать строку.
//     Используйте Function Declaration Statement (FDS).
//     Вызовите функцию до ее объявления.
//     Тестовые данные:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'
console.log('Task 1');
let a = '1', b = '1';
console.log(conc(a,b));
function conc(x,y){
  return x.toString()+y.toString()
}

// Task 2. FDE
// RU: Создайте функцию comp, которая должна сравнивать значения
//     двух параметров a и b и возвращать 1, если они равны и -1, если они не равны.
//     Используйте Function Definition Expression (FDE).
//     Вызовите функцию до ее объявления.
//     Тестовые данные:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1
//let a = 'abc', b = 'abc';
console.log('Task 2');
a = 'abC'; b = 'abc';
let result = comp(a,b);
console.log(result);
function comp(x,y){
  let rs;
  if(x.toString() === y.toString()){
    rs = 1;
  }else{
    rs = -1;
  }
  return rs
}

// Task 3. AF
// RU: Создайте анонимную функцию, которая должна
//     выводить сообщение 'message in console' в коноль.
//     Используйте ее как обработчик события click для кнопки.
// EN: Create an anonymous function, which should display
//     message 'message in console' in console.
//     Use it as an event handler of event click of the button.

//в index.html есть обработка события по нажатию кнопки
console.log('Task 3 check result in index.html');
if (!global){
  (function(){
    'use strict';
    document.addEventListener('click',() => {console.log('message in console')});
  })();
}

// Task 4. NFE
// RU: Создайте функцию fibo, которая должна вычислять числа Фибоначчи по формуле
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Создайте функцию factorial, которая должна вычислять факториал числа по формуле
//     Fn = 1 * 2 *..*n.
//     Используйте Named Function Expression (NFE).
console.log('Task 4');
let fibo = function (n){
  if (n < 1){
    return [0];
  }else if (n===1){
    return [0,1];
  }else{
    let res = fibo(n-1);
    res.push(res[res.length - 1] + res[res.length - 2]);
    return res;
  }
};
let factorial = function (n) {
  return n ? n * factorial(n - 1) : 1;
};
console.log('Fibonacci numbers = '+fibo(3));
console.log('Factorial = '+factorial(5));
// Task 5. FC
// RU: Объявите две строчные переменные: params и body и проинициализируйте
//     их строчными значениями, которые представляют список параметров и тело будущей функции.
//     Создайте функцию, используя эту информацию с помощью Function Constructor (FC).
//     Вызовите эту функцию.
console.log('Task 5');
let params = 'Myname,age', body = 'console.log("Hello my name is "+Myname+". I am "+age);';
let func = new Function(params, body);
result = func('Dima','36');
// Task 6. ArF
// RU: Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Используя стрелочные функции создайте новый массив из элементов elem * elem,
//     которые меньше 100 и отсортируйте его по возрастанию.
//     Выведите результат в консоль.
console.log('Task 6');
const arr = [1, 8, 3, 5, 12, 7, 9, 11];
console.log(arr.map(el => el*el).filter(elem => elem < 100).sort((a, b) => a - b));

// Task 7. IIFE
// RU: Создайте конструкцию, с помощью которой выполниться выше реализованная
//     функция conc.
// EN: Create a construction which allows to run the above function conc.
console.log('Task 7');
(function(){let a = '1', b = '1';console.log(a.toString()+b.toString());})();
// Task 8. Arguments Object, Rest
// RU: Создайте функцию parts, которая принимает неизвестное количество параметров.
//     Каждый параметр – это группа предложений.
//     Функция должна вырезать из параметра подстроку, начиная с символа двоеточие (:)
//     и заканчивая символом точка (.).
//     Функция должна возвращать массив подстрок.
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].
console.log('Task 8');
function parts(){
  let args = [...arguments];
  let rawStr, targetStr;
  let arr = [];
  for (let i=0; i < args.length; i++){
    rawStr = ''; targetStr = '';
    rawStr = args[i];
    targetStr = rawStr.substring(rawStr.lastIndexOf(':') + 1,rawStr.lastIndexOf('.'));
    arr[i] = targetStr;
  }
  return arr;
}
result = parts('This is the first sentence. This is a sentence with a list of items:cherries, oranges, apples, bananas.'
     ,'This is the second sentence. This is a sentence with a list of items:red, blue, yellow, black.');
console.log(result);
// Task 9. Optional Arguments
// RU: Создайте функцию find(testString, test), которая должна возвращать позицию
//     строки test в строке testString.
//     Если второй параметр не задан, используйте test = testString.
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0
console.log('Task 9');
function find (testString, test=testString){
  let indexOfFirst = testString.indexOf(test);
  return indexOfFirst;
}
console.log(find('abc','b'));
console.log(find('abc'));
console.log(find('abc','d'));
console.log(find('abc','a','b'));
// Task 10. Function as an Object
// RU: Создайте функцию str(), которая принимает один строчный параметр и
//     выводит в консоль 'String is non empty', если параметр - непустая строка и
//     'String is empty', если параметр – пустая строка.
//     Создайте функцию str.isNonEmptyStr(), как свойство функции str. Эта функция должна
//     принимать один параметр и возвращать true, если параметр непустая строка,
//     иначе false. Используйте эту функцию для реализации условия в основной функции.
//     Тестовые данные:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')
console.log('Task 10');
function str(ch) {
  if (typeof ch == 'string' && ch.length > 0){
    console.log('String is non empty');
  }else{
    console.log('String is empty');
  }
}
str.isNonEmptyStr = function(ch){
  if (typeof ch == 'string' && ch.length > 0){
    console.log('true');
  }else{
    console.log('false');
  }
}
str.isNonEmptyStr();
str.isNonEmptyStr('');
str.isNonEmptyStr('a');
str.isNonEmptyStr(1);
str();
str('a');

// Task 11. Function as a Parameter
// RU: Создайте функцию toConsole с одним параметром. Функция должна выводить
//     значение параметра в консоль.
//     Создайте функцию toAlert с одним параметром. Функция должна выводить значение
//     параметра используя alert().
//     Создайте функцию splitToWords с двумя параметрами: msg и callback.
//     Функция должна разделять строку на слова и использовать колбек для отображения слов.
//     Если второй параметр не задан, функция должна возвращать массив слов.
//     Test Data:
//     splitToWords("My very long text msg", toConsole);
//     result:
//     My
//     very
//     long
//     text
//     msg
//     splitToWords("My very long text msg", toAlert);
//     result = alert(My), ….
//     console.log( splitToWords("My very long text msg") );
//     result = ['My', 'very', 'long', 'text', 'msg']
console.log('Task 11');
console.log('Not done');

// Task 12. Function as a Result
// RU: Создайте функцию copyright, которая должна возвращать другую функцию с
//     одним параметром. Возращаемая функция должна прибавлять знак © ('\u00A9')
//     вначале своего параметра и возвращать результат. Объявите этот знак в функции copyright.
//     Тестовые данные:
//     console.log( copyright()('EPAM') ); result = © EPAM.
console.log('Task 12');
let copyright = function(){
  return function (ch){
    console.log('\u00A9'+' '+ch);
  };
};
console.log( copyright()('EPAM') );
// Task 13. Function as a Result
// RU: Задание аналогично предыдущему, но в этот раз функция copyright получает знак
//     как свой параметр.
// EN: This task is similar to the previous one, but in this case the function copyright takes
//     one parameter - sign (© ('\u00A9')).
console.log('Task 13');
copyright = function(ch1){
  return function (ch){
    console.log(ch1+' '+ch);
  };
};
console.log( copyright('\u00A9')('EPAM') );
// Task 14. Function as a Method
// RU: Создайте литерал объекта employee со следующими свойствами:
//     name: 'Ann',
//     work – функция, которая выводит в консоль сообщение "I am Ann. I am working..."
//     Тестовые данные
//     employee.work()  результат в консоле "I am Ann. I am working..."
// EN: Create an object literal employee with the following properties:
//     name: 'Ann',
//     work – function, which display in the console the following string
//     "I am Ann. I am working..."
//     Test Data:
//     employee.work()  result in the console "I am Ann. I am working..."
console.log('Task 14');
let employee = {
  name: 'Ann',
  work: function () {
    console.log(`I am ${this.name}. I am working...`);
  }
};
employee.work();
// Task 15. Borrow Method
// RU: Создайте литерал объекта person со свойством name.
//     Вызовите метод work объекта employee из предыдущего задания.
// EN: Create an object literal person with property name.
//     Call the method work of the object employee from the previous task.
console.log('Task 15');
let work = Object.assign({}, employee);
console.log(work);
work.work();
// Task 16. Memoization
// RU: Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Функция должна хранить те значения,
//     которые она уже вычисляла. Используя методы console.time(), console.timeEnd()
//     определите время вычисления функции fibo и функции fiboMemo.
// EN: Create a function fiboMemo for calculating Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. The function should store the values computed earlier.
//     Using methods console.time(), console.timeEnd() calculate the time for function fibo
//     and fiboMemo.
