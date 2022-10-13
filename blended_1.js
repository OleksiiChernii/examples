// -----------------------------------------TASK 1------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків
const hogvarts = {
   griffindor: [{
           name: "Harry",
           points: 17
       },
       {
           name: "Hermiona",
           points: 19
       },
       {
           name: "Ron",
           points: 14
       },
   ],
   sliserin: [{
           name: "Draco",
           points: 17
       },
       {
           name: "Goyl",
           points: 14
       },
       {
           name: "Crabbe",
           points: 5
       },
   ],

   getStudents(facultyName){
    return this[facultyName].map(e => e.name);
   },

   getFacultyPoints(facultyName){
    return this[facultyName].map(e => e.points).reduce((acc, e) => acc += e, 0);
   },

   getWinner(){
    return this.getFacultyPoints('griffindor') > this.getFacultyPoints('sliserin') ? 'griffindor' : 'sliserin';
   }
}

// -----------------------------------------TASK 2------------------------------------------//
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.
const students = [{
   name: `Lika`,
   language: `html`
}, {
   name: `Anton`,
   language: `css`
}, {
   name: `Andriy`,
   language: `js`
}, {
   name: `Vova`,
   language: `html`
}, {
   name: `Alina`,
   language: `css`
}, {
   name: `Egor`,
   language: `js`
}, {
   name: `Aleksandr`,
   langunage: `html`
}, {
   name: `Taras`,
   language: `css`
}, {
   name: `Ivan`,
   language: `js`
}, {
   name: `Make`,
   language: `html`
}, ];

function findStudentsByLanguage(students, language){
    return students.filter(student => student.language == language).map(student => student.name);
}


// -----------------------------------------TASK 3------------------------------------------//
// // Порахувати скільки ззаробив кожен юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )
// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);
const workers = [{
       name: 'Alex',
       salary: 3500,
       month: 12,
   },
   {
       name: 'Dima',
       salary: 2500,
       month: 9,
   },
   {
       name: 'Oleg',
       salary: 1500,
       month: 36,
   },
];

function getSallaryByName(workers, workerName){
    const worker = workers.find(worker => worker.name == workerName);
    return worker.salary * worker.month;
}

function getFullSallary(workers){
    return workers.map(worker => worker.salary * worker.month).reduce((acc, e) => acc += e, 0);
}


// -----------------------------------------TASK 4------------------------------------------//
// 1 Створити функцію яка буде приймати 2 параметри
//   1 параметр масив
//   2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"
// 2 Порахувати вік всіх юзерів у яких є ключ age.
const friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
   { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
   { name: "Oleksii", books: ["Bible","War and peace","Harry Potter", "Romeo and Juliet"], age: 26},
]

function getFriendsWithBook(friends, book){
    return friends.filter(friend => friend.books.includes(book)).join(', ');
}

function getFriendsAge(friends){
    return friends.filter(friend => friend.hasOwnProperty('age')).reduce((acc, e) => acc += e.age, 0);
}

// -----------------------------------------TASK 5------------------------------------------//
// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

const bankSystem = {
   privat : 1000,
   mono : 1500,
}

// -----------------------------------------TASK 6------------------------------------------//
// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
const people1 = [{
       name: 'Alex',
       know: ['Eva', 'Jhon'],
   },
   {
       name: 'Ivan',
       know: ['Jhon', 'Alex']
   },
   {
       name: 'Eva',
       know: ['Alex','Jhon']
   },
   {
       name: 'Jhon',
       know: ['Alex']
   },
] //Not found
const people2 = [{
       name: 'Alex',
       know: ['Eva', 'Jhon'],
   },
   {
       name: 'Jhon',
       know: []
   },
   {
       name: 'Eva',
       know: []
   },
   {
       name: 'Ivan',
       know: ['Jhon', 'Alex']
   },
];// Not found
const people3 = [{
       name: 'Alex',
       know: ['Eva', 'Jhon'],
   },
   {
       name: 'Jhon',
       know: []
   },
   {
       name: 'Eva',
       know: ['Alex', 'Jhon']
   },
   {
       name: 'Ivan',
       know: ['Jhon', 'Alex']
   },
]; // Jhon

function findNarcissus(people){
    let knowNobody = people.find(p => p.know.length == 0)?.name;
    let knowEverybody = people.filter(p => p.name !== knowNobody).every(p => p.know.includes(knowNobody));
    return knowEverybody ? knowNobody: '';
}


// -----------------------------------------TASK 7------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)
const products = [{
   id: 'sku1',
   qty: 1,
}, {
   id: 'sku2',
   qty: 2,
}, {
   id: 'sku3',
   qty: 3,
}, {
   id: 'sku1',
   qty: 6,
}, {
   id: 'sku1',
   qty: 8,
}, {
   id: 'sku2',
   qty: 19,
}, {
   id: 'sku4',
   qty: 1,
}]

function changeArray(array){
    let result = array.reduce((acc, e) => {
        let findSameInAcc = acc.find(r => r.id == e.id);
        if(findSameInAcc){
            findSameInAcc.qty += e.qty;
        }else{
            acc.push(e);
        }
        return acc;
    }, []);
    array.splice(0, array.length, ...result);
}
console.log(changeArray(products))
console.log(products)
