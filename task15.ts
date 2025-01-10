// Defining an interface
interface Animal {
    name: string;
    makeSound(): void;
}

// Implementing the interface in a class
class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Woof Woof");
    }
}

// Usage
const myDog: Animal = new Dog("Buddy");
myDog.makeSound(); // Output: Woof Woof

