//========= ✨ Day 1 =========//

//🌸 Suma de elementos: Escribe una función que tome un array de números y devuelva la suma de todos los elementos.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const exercise1 = () => {
  const sumNumbers = numbers.reduce((a, b) => a + b);
  console.log(sumNumbers);
};
exercise1();

//🌸 Filtrar números pares: Escribe una función que tome un array de números y devuelva un nuevo array con solo los números pares.
const evenOddNumbers = [2, 7, 14, 3, 8, 11, 6, 9, 4, 13];
const exercise2 = (array) => {
  const filterArray = array.filter((number) => {
    return number % 2 === 0;
  });
  console.log(`✨ Your even numbers are:`, filterArray);
};
exercise2(evenOddNumbers);

//🌸 Encontrar el número mayor: Escribe una función que tome un array de números y devuelva el número más grande en ese array.
const randomNumbers = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const exercise3 = (array) => {
  const maxNumber = Math.max(...array);
  return maxNumber;
};
const maxResult = exercise3(randomNumbers);
console.log(`✨ The largest number in the array is: ${maxResult}`);

//🌸 Eliminar duplicados: Escribe una función que tome un array y elimine los elementos duplicados, devolviendo un nuevo array sin duplicados.
const repeatedFruits = [
  "apple",
  "banana",
  "kiwi",
  "grape",
  "apple",
  "pear",
  "strawberry",
  "apple",
];
const exercise4 = (array) => {
  const unrepeatedFruits = [...new Set(array)];
  return unrepeatedFruits;
};
const unrepeatedArray = exercise4(repeatedFruits);
console.log(`✨ Here the array without the duplicates: `, unrepeatedArray);

//🌸 Invertir un array: Escribe una función que tome un array y lo invierta, es decir, el primer elemento se convierte en el último y viceversa.
const unreverseFoods = [
  "pizza",
  "burger",
  "salad",
  "sushi",
  "grilled chicken",
  "pasta",
  "tacos",
  "soup",
  "lasagna",
  "steak",
];
const exercise5 = (array) => {
  const reverseFoods = array.reverse();
  return reverseFoods;
};
const resultReverseFood = exercise5(unreverseFoods);
console.log(`✨ Here is the array of foods in reverse: `, resultReverseFood)

//🌸 Contar elementos: Escribe una función que tome un array y devuelva un objeto que contenga la cantidad de veces que aparece cada elemento en el array.
const animals = [
  "lion",
  "elephant",
  "dolphin",
  "giraffe",
  "monkey",
  "dolphin",
  "tiger",
  "penguin",
  "koala",
  "zebra",
  "snake",
  "dolphin",
];

//🌸 Unir arrays: Escribe una función que tome dos arrays y los una en uno solo.
let array1 = ["a", "b", "c", "d", "e"];
let array2 = [1, 2, 3, 4, 5];

const exercise7 = (array1, array2) => {
  const joinedArray = array1.concat(array2);
  return joinedArray;
};
const resultJoinArray = exercise7(array1, array2);
console.log(`✨ This happens if you join two arrays: `,resultJoinArray)

//🌸 Ordenar un array: Escribe una función que tome un array de números y lo ordene de menor a mayor.
const disorderedNumbers = [42, 17, 8, 102, 53, 91, 24, 77, 33, 56];
const exercise8 = (array) => {
  const orderedNumbers = array.sort((a, b) => a - b);
  return orderedNumbers;
};
const resultOrderNumbers = exercise8(disorderedNumbers);
console.log(`✨ Here you have your array ordered from the smallest to largest number: `, resultOrderNumbers)

//🌸 Eliminar elemento por valor: Escribe una función que tome un array y un valor, y elimine la primera aparición de ese valor en el array.
const randomArray = [10, 5, 42, 7, 15, 23, 48, 5, 10];


//🌸 Duplicar cada elemento: Escribe una función que tome un array y duplique cada elemento en el array.
const unrepeatedFlowers = ["Tulip", "Daisy", "Lily", "Sunflower", "Rose", "Orchid", "Daffodil", "Carnation"];
