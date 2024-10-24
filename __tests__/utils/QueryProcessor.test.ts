import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom';

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test("should return shakespeare description", () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe(
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        );
    });

    test("should return my Andrew ID", () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("yalkhiya");
    });

    test("should return my name", () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("yalkhiya-313");
    });

    test("should return the sum of two numbers", () => {
        const query = "What is 87 plus 63?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("150");
    });

    test("should return the product of two numbers", () => {
        const query = "What is 9 multiplied by 78?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("702");
    });

    test("should return prime numbers", () => {
        const query = "Which of the following numbers are primes: 11, 47, 70, 29, 82?";
        const response = QueryProcessor(query);
        expect(response).toBe("11, 47, 29");
    });

    test("should return no primes if none are found", () => {
        const query = "Which of the following numbers are primes: 4, 6, 8, 10?";
        const response = QueryProcessor(query);
        expect(response).toBe("None");
    });

    test("should return the largest number", () => {
        const query = "Which of the following numbers is the largest: 63, 97, 25?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("97");
    });

    test("should return the square and cube number", () => {
        const query = "Which of the following numbers is both a square and a cube: 8, 3616, 1296, 2069, 381, 1260, 64?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("64");
    });
});
