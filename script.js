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
const storeCounter = {} //Almacenamiento de recuento de cada animal
const exercise6 = (array) => {
  array.forEach(animal => {
    if(storeCounter[animal]) {
      storeCounter[animal]++; //Si el animal existe, se incrementará su valor.
    } else {
      storeCounter[animal] = 1;//Si el animal NO existe, se agrega al objeto con un valor de 1.
    }
  }) 
  return storeCounter
}

const resultAnimalsCounter = exercise6(animals)
console.log(`✨ In this array we have:`,resultAnimalsCounter)

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
const randomArray = [10, 5, 42, 7, 15, 23, 48, 5];
const exercise9 = (array, valor) => {
  const findNumber = array.indexOf(valor)
  if(findNumber !== -1){
    array.splice(findNumber, 1)
    return array
  }
}
const valorToRemove = 42; 
const resultDeleteNumber = exercise9(randomArray, valorToRemove);
console.log(`✨ The removed value is: ${valorToRemove} AND the updated array is: `,resultDeleteNumber);

//========= ✨ Day 2 =========//

//🌼 Buscar en un array de objetos: Dado un array de objetos que tienen una propiedad específica, crea una función que busque un objeto por esa propiedad.
const arrayCharacterCyberpunk = [
    { name: "David Martinez", isAlive: false },
    { name: "Lucyna Kushinada", isAlive: true },
    { name: "Rebecca", isAlive: false },
    { name: "Maine", isAlive: false },
    { name: "Kiwi", isAlive: false }
];
const exercise10 = (array, property, valor) => {
  const findObject = array.find(object => {
    return object[property] === valor
  })
  return findObject
}
const foundObject = exercise10(arrayCharacterCyberpunk, "name", "David Martinez")
console.log(`✨ The requested character is: `, foundObject)

//🌼 Transformar a mayúsculas: Crea una función que tome un array de strings y devuelva un nuevo array donde cada string esté en mayúsculas.
const arrayNames = ["camila", "tamara", "nayla", "rocio", "sonia", "diana"]
const exercise11 = (array) => {
  const namesMayus = array.map(name => {
    return name.toUpperCase()
  })
  return namesMayus
}
const namesMayus = exercise11(arrayNames)
console.log(`✨ Here your array in UPPERCASE:`, namesMayus)

//🌼 Eliminar elementos específicos: Escribe una función que tome un array y elimine todos los elementos que cumplan con cierta condición.
const arrayAnimals = ["Cow", "Bird", "Rabbit", "Jirafe", "Hippo", "Chameleon", "Gepard"]
const exercise12 = (array) => {
  const deleteElements = array.filter(element => {
    return !element.toLowerCase().includes("i")
  })
  return deleteElements
}
const newArray = exercise12(arrayAnimals)
console.log(`✨ Here are the animals that do not have the letter I:`, newArray)

//========= ✨ Day 3 =========//

//🌺 Eliminar números negativos: Escribe una función que tome un array de números y elimine todos los números negativos.
const arrayRandomNumbers = [-148, 230, 5, 949, 12, -1, 32, 82, -44]
const exercise13 = (array) => {
  const arrayPositiveNumbers = array.filter(number => {
    return number >= 0
  })
  return arrayPositiveNumbers
}
const positiveNumbers = exercise13(arrayRandomNumbers)
console.log(`✨ Here the array without numbers negative numbers:`, positiveNumbers)

//🌺 Reemplazar elementos: Escribe una función que tome un array y dos valores. La función debe reemplazar todas las ocurrencias del primer valor con el segundo valor en el array.



//🌺 Buscar elemento: Crea una función que tome un array y un elemento como parámetros. Utiliza dicho método para determinar si el elemento está presente en el array.

//========= ✨ Day 4 =========//

//💐 Obtener un índice: 