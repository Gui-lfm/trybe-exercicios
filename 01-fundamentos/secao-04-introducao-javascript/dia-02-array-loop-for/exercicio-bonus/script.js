let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//parte1

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) { //verifica se primeiro index é menor que o segundo
            let position = numbers[index]; 
            numbers[index] = numbers[secondIndex]; 
            numbers[secondIndex] = position; 
        }
    }
}

console.log(numbers)

//parte2 

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) { 
            let position = numbers[index]; 
            numbers[index] = numbers[secondIndex]; 
            numbers[secondIndex] = position; 
        }
    }
}

console.log(numbers)

//parte3

