// Defining an alias for a complex type
type Point = { x: number; y: number };

// Function using the alias
function printPoint(point: Point): void {
    console.log(`X: ${point.x}, Y: ${point.y}`);
}

// Usage
const myPoint: Point = { x: 10, y: 20 };
printPoint(myPoint); // Output: X: 10, Y: 20
