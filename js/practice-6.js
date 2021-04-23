/*--- Сортировка примитивов ---
1.Выполнить сортировку массива цен по убыванию и возрастанию.*/

const arr = [12, 45, 69, 75, 1, 3];
arr.sort((a, b) => a - b);
// console.log(arr);

/*--- Сортировка строк ---
2. Выполнить сортировку массива названий мониторов в алфавитном и обратном алфавитном порядке.
*/

const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];
monitors.sort((a, b) => a.localeCompare(b));
// console.log(monitors);
monitors.sort((a, b) => b.localeCompare(a));
// console.log(monitors);

/*
--- Сортировка сложных типов ---
3. Выполнить сортировку массива объектов:
a. по возрастанию и убыванию значения свойства price.
b. по имени в алфавитном и обратном алфавитном порядке. 
*/

const items = [
  { name: "SAMSUNG", price: 15000 },
  { name: "LG", price: 9000 },
  { name: "ASUS", price: 27000 },
  { name: "DELL", price: 12000 },
  { name: "BENQ", price: 7000 }
];

// items.sort((a, b) => a.name.localeCompare(b.name));
// items.sort((a, b) => a.price - b.price);
// console.log(items);

/*4.Собрать в allTopics массив всех предметов всех курсов используя flatMap.
Используя Array.prototype.filter выполнить фильтрацию, 
оставив в uniqueTopics только уникальные элементы.
*/

const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"]
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"]
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Functions",
      "Conditions",
      "Classes",
      "DOM",
      "Git",
      "GitHub"
    ]
  },
  {
    name: "Intermediate JavaScript",
    allTopics: [
      "VSCode",
      "NPM",
      "Bundlers",
      "Transpiling",
      "Promises",
      "AJAX",
      "Git",
      "GitHub"
    ]
  }
];

const allTopics = courses.flatMap((courses) => courses.topics);
// console.log(allTopics);
const uniqueTopics = allTopics.filter((courses, index, allTopics) => allTopics.indexOf(courses) === index);
// console.log(uniqueTopics);

/* 
  1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
     Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
     !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
*/

const users = [
  { name: "Игорь", sex: "male", age: 29 },
  { name: "Михаил", sex: "male", age: 21 },
  { name: "Ирина", sex: "female", age: 25 },
  { name: "Олег", sex: "male", age: 14 },
  { name: "Марина", sex: "female", age: 23 },
  { name: "Оксана", sex: "female", age: 17 },
  { name: "Алексей", sex: "male", age: 8 },
  { name: "Антон", sex: "male", age: 47 },
  { name: "Валерия", sex: "female", age: 50 },
  { name: "Екатерина", sex: "female", age: 12 }
];

const min = users.filter(user => user.age >= 18).sort((a, b) => a.age - b.age);
const result = min[0].sex === "male" ? `${min[0].name} самый молодой и ему ${min[0].age} лет` :
  `${min[0].name} самый молодой и ей ${min[0].age} лет`
console.log(result);



// console.log(min);

/* 
  2. В массиве users отфильтровать всех по полу, сначала female потом male 
*/

const genderFemale = users.filter(user => user.sex === 'female');
const genderMale = users.filter(user => user.sex === 'male');
const gender = [...genderFemale, ...genderMale];
// console.log(gender);


