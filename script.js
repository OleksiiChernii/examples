// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості: // name приватна властивість (ім'я, успадковується від User), // surname приватна властивість (прізвище, успадковується від User), // year (рік вступу до вузу). // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента. // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5 курс виводити що студент являєтсья випускником). // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!). // Приклад ініціалізації екземпляру класа: // const student = new Student('Петрик', 'Пяточкин', 2019); // student.getFullName(); //поверне 'Петрик Пяточкин' // student.getCourse(); //поверне 3 (третій курс) 
class User {
    #name;
    #surname;

    constructor(name, surname){
        this.#name = name;
        this.#surname = surname;
    }

    getFullName(){
        return this.#name + ' ' + this.#surname;
    }
}

class Student extends User{

    constructor(name, surname, year){
        super(name, surname);
         this.year = year;
    }

    getCourse(){
        return (new Date().getFullYear() - this.year <= 5) ? new Date().getFullYear() - this.year: 'game over';
    }
}

let number = function(busStops){
    return busStops.reduce((acc, stop) => acc += stop[0] - stop[1], 0);
}

function nbYear(p0, percent, aug, p) {
    // your code
  let result = 0;
  let currentPopulation = p0;
  while(currentPopulation < p){
    currentPopulation += Math.floor(currentPopulation * percent / 100) + aug;
    result++;
  }
  console.log(currentPopulation)
  return result;
}

function findOdd(A){
    let numbers = A.reduce((acc ,n) => {
        if(!acc.includes(n)){
            acc.push(n);
        }
        return acc;
    },[]);
    return numbers[numbers.reduce((acc, num) => {
        acc.push(A.filter(a => a == num).length);
        return acc;
    }, []).findIndex((e) => e % 2 != 0)];
}

function arraySum(arr) {
    // sum ALL the things!
    return arrayInDeep(arr).filter(parseFloat).reduce((acc, e) => acc += e, 0);
}

function arrayInDeep(arr){
    let result = [];

    function recursiveArray(array){
        array.forEach(element => {
            if(Array.isArray(element)){
                recursiveArray(element);
            }else{
                result.push(element);
            }
        });
    }
    recursiveArray(arr);
    return result;
}
