let num: number = 5;

type valid = string | number;
console.log(`Variable: ${num}`);

// interface User{
//     nickname: string,
//     email: valid,
//     password: valid
// }

// console.log(num * 5)
import os from 'os';
import math from './testMath.js';

let res2: number = math.plus(2,3);
let res3: number = math.x(100, 3);
console.log(`Ans1 - ${res2}, Ans2 - ${res3}`)

let res: any = os.platform()
console.log(`Your OS: ${res}`)