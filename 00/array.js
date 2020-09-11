// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];

    // ('구분자')로 배열 원소들이 구분되어 출력됨
    // join(separator?: string): string;
    const result = fruits.join('/');

    console.log('01 :) ' + result);
}

// Q2. make an array out of a string
{
    const fruits = 'cherry, blueberry, grape, strawberry';

    // ('구분자')로 배열 원소들이 구분되어 출력됨
    // split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];
    const result = fruits.split(',')
    console.log('02 :) ' + result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];

    // sort(compareFn?: (a: T, b: T) => number): this;
    // const result = array.sort((a, b) => b - a);
    
    const result = array.reverse();
    console.log('03 :) ' + result);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];

    /*
    이 경우에는 원배열도 변형
    //  splice(start: number, deleteCount?: number): T[];
    const result = array.splice(2);
    */

    // slice(start?: number, end?: number): T[];
    const result = array.slice(2, 5);
    console.log('04 :) ' + result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    //   find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
    const result = students.find((student) => student.score === 90);

    console.log(result);
}

// Q6. make an array of enrolled students
{
    //   filter(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    const result = students.filter((students) => students.enrolled === true);

    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    //   map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    const result = students.map((student) => student.score);

    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    //   some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    const result = students.some((students) => students.score < 50);

    console.log('08 :) ' + result);
}

// Q9. compute students' average score
{
    //   reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    // reduce((prev, curr) => { fn }, 0) <= 0부터 시작
    // const result = students.reduce((prev, curr) => {
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // },0);

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log('09 :) ' + result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // score 배열 -> 문자열로 전환 묶어주기
    // map() -> join()

    const result = students
        .map((students) => students.score)
        .join();
    console.log('10 :) ' + result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    // score 배열로 묶고 -> 문자열 전환 묶고 -> 정렬 :: 에러
    // score 배열로 묶고 -> 정렬 -> 문자열 전환
    const result = students
        .map((students) => students.score)
        .sort((a, b) => a - b)
        .join();
    console.log('Bonus :) ' + result);
}

{
    const fruits = ['banana', 'orange', 'apple'];

    const result = fruits.slice(1);
    console.log(fruits);
    console.log(result);
}