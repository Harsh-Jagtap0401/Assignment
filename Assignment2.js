// Task 1: Callback Functions

function multiplyByTwo(number, callback) {
    const result = number * 2;
    callback(result);
}

// Task 2: Asynchronous File Reading
const fs = require('fs');
 
function readFileContents1(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

// Task 3: Promises
function sumArray(numbers) {
    return new Promise((resolve, reject) => {
        if (numbers.length === 0) {
            return reject(new Error('Array cannot be empty'));
        }
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        resolve(sum);
    });
}

function squareArray(numbers) {
    return new Promise((resolve, reject) => {
        if (numbers.length === 0) {
            return reject(new Error('Array cannot be empty'));
        }
        const squared = [];
        for (let i = 0; i < numbers.length; i++) {
            squared.push(numbers[i] * numbers[i]);
        }
        resolve(squared);
    });
}

// Task 4: Async/Await 
const fs1 = require("fs").promises;

async function readFileContents(filename) {
    try {
        const data = await fs1.readFile(filename, "utf8");
        return data;
    } catch (err) {
        console.error('Error:', err);
    }
}
 
// Task 5: Displaying Output

// Task 1 multiplyByTwo function
multiplyByTwo(5, (result) => {
    console.log('Result of multiplying by two:', result);
});

// Task 2 Using readFileContents function
readFileContents1('data.txt', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File contents of Task 2:", data);
    }
});
    

// Task 3 Using sumArray function
sumArray([1, 2, 3, 4, 5])
    .then(sum => {
        console.log('Sum of array:', sum);
    })
    .catch(err => {
        console.error('Error:', err);
    });

// Task 3 Using squareArray function
squareArray([1, 2, 3, 4, 5])
    .then(squared => {
        console.log('Squared array:', squared);
    })
    .catch(err => {
        console.error('Error:', err);
    });

// Task 4: Async/Await

(async () => {
    const data = await readFileContents('data.txt');
    console.log('Contents of data.txt using async/await:', data);
})();


//Bonus Task

function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

delay(2000).then(() => {
    console.log('Resolved after 2 seconds');
});