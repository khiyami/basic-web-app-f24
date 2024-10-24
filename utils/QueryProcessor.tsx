export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "yalkhiya" );
  }
  if (query.includes("What is your name?")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "yalkhiya-313" );
  }
  const match = query.match(/What is (\d+) plus (\d+)\?/);
  if (match) {
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);
    const result = num1 + num2;
    return result.toString();
  }
  const largestMatch = query.match(/Which of the following numbers is the largest: (.*)\?/);
  if (largestMatch) {
    const numbers = largestMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const largest = Math.max(...numbers);
    return largest.toString();
  }
  

  return "";
}
