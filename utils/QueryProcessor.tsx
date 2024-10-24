export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "yalkhiya";
  }

  if (query.includes("What is your name?")) {
    return "yalkhiya-313";
  }

  const additionMatch = query.match(/What is (\d+) plus (\d+)\?/);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1], 10);
    const num2 = parseInt(additionMatch[2], 10);
    return (num1 + num2).toString();
  }

  const multiplicationMatch = query.match(/What is (\d+) multiplied by (\d+)\?/);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    return (num1 * num2).toString();
  }

  const largestMatch = query.match(/Which of the following numbers is the largest: (.*)\?/);
  if (largestMatch) {
    const numbers = largestMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  const squareAndCubeMatch = query.match(/Which of the following numbers is both a square and a cube: (.*)\?/);
  if (squareAndCubeMatch) {
    const numbers = squareAndCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const result = numbers.find(num => isSquare(num) && isCube(num));
    return result ? result.toString() : "None";
  }

  const primeMatch = query.match(/Which of the following numbers are primes: (.*)\?/);
  if (primeMatch) {
    const numbers = primeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const primes = numbers.filter(isPrime).join(', ');
    return primes || "None";
  }

  return "";
}

// Helper Functions
function isSquare(num: number): boolean {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

function isCube(num: number): boolean {
  const cbrt = Math.cbrt(num);
  return cbrt === Math.floor(cbrt);
}

function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
