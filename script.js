// Ask user for input
const length = Number(prompt("Enter the length of the rectangle:"));
const width = Number(prompt("Enter the width of the rectangle:"));

// Calculations of the input

const area = length * width;
const perimeter = 2 * (length + width);

// Output results to the console
console.log("Mini Geometry Calculator Results");
console.log("-------------------------------");
console.log("Length:", length);
console.log("Width:", width);
console.log("Area:", area);
console.log("Perimeter:", perimeter);
