// Check if a number is even or odd and print it out. Use switch case to solve the problem.

// Constraints:
// 0 <= input <= 1000

// Input:
// An integer
// Output:
// EVEN if the integer is even
// ODD if the integer is odd.

// Example:
// Input:
// 12
// Output:
// EVEN

let number = 12;
switch (number % 2) {
    case 0:
        console.log("EVEN");
        break;
    case 1:
        console.log("ODD");
        break;
}


// Take an integer and print "YES" if the integer is prime and "NO" if it is not.

// Constraints:
// 2 <= N <= 1000

// Input:
// A single integer
// Output:
// A string "YES" or "NO"

// Example:
// Input
// 3
// Output
// YES


let number = 3;
let isPrime = true;
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
    }
}   if (isPrime) {
    console.log("YES");
}
else {
    console.log("NO");
}

// Take 10 integers as input and print their product.

// Constraints:
// 1 <= T <= 100

// Input:
// Ten lines of input containing ten integers each.
// Output:
// Print the product of all the ten integers.

// Example:
// Input:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// Output:
// 3628800

let product = 1;
for (let i = 1; i <= 10; i++) {
    product *= i;
}   console.log(product);