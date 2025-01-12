class MyClass {
    private var1: string;
    private var2: string;
  
    constructor() {
      this.var1 = "";
      this.var2 = "";
    }
  
    // Method to set values for private variables
    setValues(value1: string, value2: string): void {
      this.var1 = value1;
      this.var2 = value2;
    }
  
    // Method to display the values of private variables
    displayValues(): string {
      return `Var1: ${this.var1}, Var2: ${this.var2}`;
    }
  }
  
  // Example usage
  const obj = new MyClass();
  obj.setValues("Value 1", "Value 2");
  console.log(obj.displayValues()); // Output: Var1: Value 1, Var2: Value 2
  