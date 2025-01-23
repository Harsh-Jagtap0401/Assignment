// 1. Create a TypeScript function that takes either a string or a number as a parameter. Use a union type to 
// define the parameter
console.log("--------------------------------------------------------------");

console.log("Question 1 Output: ");

function logValue(value: string | number): void {
    console.log(value);
  }
  
  logValue("Hello");
  logValue(42);



  console.log("--------------------------------------------------------------");

// 2. Define two interfaces, one with properties for a person's name and another with properties for their 
// contact information. Create a new interface using intersection to combine both.

console.log("Question 2 Output: ");

interface Person {
    name: string;
  }
  
  interface Contact {
    email: string;
    phone: string;
  }
  
  interface PersonContact extends Person, Contact {}
  
  const personContact: PersonContact = {
    name: "Harsh",
    email: "harsh@mail.com",
    phone: "1234567891",
  };

  console.log(personContact);

  console.log("--------------------------------------------------------------");
  
// 3. Create a type alias for a complex data structure, such as a nested object or an array of objects.

console.log("Question 3 Output: ");

type UserProfile = {
    id: number;
    name: string;
    address: {
      street: string;
      city: string;
    };
    tags: string[];
  };
  
  const user: UserProfile = {
    id: 1,
    name: "harsh",
    address: { street: "Main St", city: "Pune" },
    tags: ["admin", "user"],
  };
  
  console.log(user);
  
  console.log("--------------------------------------------------------------");
// 4. Define an enum for days of the week. Create a function that takes a day as a parameter and logs a 
// message based on the day.

console.log("Question 4 Output: ");

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  function getDayMessage(day: Day): void {
    switch (day) {
      case Day.Monday:
        console.log("Start of the workweek!");
        break;

      case Day.Tuesday:
        console.log("Another day at work.");
        break;
      
      case Day.Wednesday:
        console.log("Another day at work.");
        break;

      case Day.Thursday:
        console.log("Another day at work.");
        break;

      case Day.Friday:
        console.log("End of the workweek!");
        break;
      
      case Day.Saturday:
        console.log("Weekend!");
        break;

      case Day.Sunday:
        console.log("Rest day!");
        break;

      default:
        console.log("Another day at work.");
    }
  }
  
  getDayMessage(Day.Monday);

  
  
  console.log("--------------------------------------------------------------");
// 5. Use type assertions to convert a variable from one type to another. Explain why you chose type 
// assertions over other options.

console.log("Question 5 Output: ");

let value: unknown = "Hello, world!";
let strLength: number = (value as string).length;

console.log(strLength);


console.log("--------------------------------------------------------------");

// 6. Create a generic function that takes an array and returns the first element. Use the function with arrays 
// of different types.

console.log("Question 6 Output: ");

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  const numberArray = [1, 2, 3];
  const stringArray = ["a", "b", "c"];
  
  console.log(getFirstElement(numberArray)); 
  console.log(getFirstElement(stringArray)); 


  
  console.log("--------------------------------------------------------------");
  

// 7. Create a mapped type that converts all properties of an interface to be optional. Apply this mapped 
// type to an existing interface.

console.log("Question 7 Output: ");

interface Person1 {
    name: string;
    age: number;
  }
  
  type PartialPerson1 = {
    [K in keyof Person1]?: Person1[K];
  };
  
  const person1: PartialPerson1 = { name: "John" }; 

  console.log(person1);

  
  console.log("--------------------------------------------------------------");
  
// 8. Define a conditional type that checks if a given type is an array. Use it to conditionally assign a type 
// based on whether a variable is an array or not.

console.log("Question 8 Output: ");

type IsArray<T> = T extends any[] ? "Array" : "Not Array";

const result: IsArray<number[]> = "Array";  
const result2: IsArray<number> = "Not Array";  

console.log(result);
console.log(result2);


console.log("--------------------------------------------------------------");

// 9. Create an interface representing a configuration object. Use Readonly to make the properties 
// immutable and Partial to allow for partial updates.

console.log("Question 9 Output: ");

interface Config {
    apiUrl: string;
    timeout: number;
  }
  
  const config: Readonly<Config> = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
  };
  
  // config.apiUrl = "newUrl"; 
  
  const partialConfig: Partial<Config> = { timeout: 3000 };

  console.log(partialConfig);


  
  console.log("--------------------------------------------------------------");
  
// 10. Write a function that infers the return type based on the input type. For example, if the input is a string, 
// the function returns a number; if it's an array, it returns a boolean.

console.log("Question 10 Output: ");

function processInput(input: string | any[]){
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length > 0; 
  }
}

console.log(processInput("Hello")); 
console.log(processInput([1, 2, 3]));


  
  console.log("--------------------------------------------------------------");
  
// 11. Create a namespace that encapsulates a set of functions related to mathematical operations. 
// Demonstrate how to use the namespace in another file.

console.log("Question 11 Output: ");

export namespace MathOps {
    export function add(a: number, b: number): number {
      return a + b;
    }
  
    export function subtract(a: number, b: number): number {
      return a - b;
    }
  }
  
const result1 = MathOps.add(10, 5);

console.log("Run example.ts file to see the output of Question 11");

console.log("--------------------------------------------------------------");
  
// 12. Define two function types, one representing a function that takes a number and another that takes a 
// string. Create a new type that represents the intersection of these two function types.

console.log("Question 12 Output: ");

type NumberFunc = (x: number) => void;
type StringFunc = (x: string) => void;

type CombinedFunc = NumberFunc & StringFunc;

const combined: CombinedFunc = (x: any) => {
  if (typeof x === "number") {
    console.log("Number:", x);
  } else if (typeof x === "string") {
    console.log("String:", x);
  }
};

combined(42);
combined("Hello");



console.log("--------------------------------------------------------------");

// 13. Define two interfaces representing different types of objects. Create a new type that represents the 
// union of these two object types.

console.log("Question 13 Output: ");

interface Dog {
    breed: string;
    bark: () => void;
  }
  
  interface Cat {
    breed: string;
    meow: () => void;
  }
  
  type Animal = Dog | Cat;
  
  const animal: Animal = {
    breed: "Labrador",
    bark: () => console.log("Woof"),
  };
  

  console.log(animal);

  console.log("--------------------------------------------------------------");
  
// 14. Define an interface with several properties. Use the keyof keyword to create a type that represents the 
// keys of the interface.

console.log("Question 14 Output: ");

interface Person2 {
    name: string;
    age: number;
  }
  
  type PersonKeys = keyof Person2; 
  
  const key: PersonKeys = "name";

  console.log(key);
  
  
  console.log("--------------------------------------------------------------");

// 15. Write a function that checks if a variable is of a certain type using a type guard. Use this function to 
// conditionally handle different types.

console.log("Question 15 Output: ");

function isString(value: any): value is string {
    return typeof value === "string";
  }
  
  const result3 = isString("Hello");  
  const result4 = isString(123);     

  console.log(result3);
  console.log(result4);

  console.log("--------------------------------------------------------------");  
  
// 16. Create an interface representing a dictionary with a dynamic set of keys and values. Use an index 
// signature to define the type.

console.log("Question 16 Output: ");

interface Dictionary {
    [key: string]: string;
  }
  
  const dict: Dictionary = {
    hello: "world",
    name: "Harsh",
  };
  

  console.log(dict);

  console.log("--------------------------------------------------------------");

// 17. Define a tuple type representing a person's information, including name, age, and address.

console.log("Question 17 Output: ");

type EmployeesInfo = [string, number, string];

const Employees: EmployeesInfo = ["harsh", 22, "pune"];

console.log(Employees);

console.log("--------------------------------------------------------------");

// 18. Create a function that takes a parameter and allows it to be either a string or null/undefined. Handle 
// both cases in the function.

console.log("Question 18 Output: ");

function handleInput(input: string | null | undefined): void {
    if (input) {
      console.log("Input:", input);
    } else {
      console.log("No input provided.");
    }
  }
  
  handleInput("Hello");
  handleInput(null);
  handleInput(undefined);

  
  console.log("--------------------------------------------------------------");
  
// 19. Write a TypeScript function without explicitly specifying the types. Allow TypeScript to infer the types 
// based on the function implementation.

console.log("Question 19 Output: ");

function add(a, b) {
    return a + b;
  }
  
  console.log(add(1, 2));  
  console.log(add("a", "b"));  


  
  console.log("--------------------------------------------------------------");
  
// 20. Create an object with properties representing a person's information. Use the object spread syntax to 
// create a new object with additional properties.

console.log("Question 20 Output: ");

const person = { name: "Harsh", age: 22 };
const extendedPerson = { ...person, address: "sai onkar park" };

console.log(extendedPerson);  


console.log("--------------------------------------------------------------");

