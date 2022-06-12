// try {
//   process.stdin.on('data', (chunk) => {
//     if(chunk.toString().slice(0, -2) === 'aaa') {
//       throw new Error("It's error");
//     }
//   });
//   process.stdin('error', (err) => {throw new Error("ffffffffff");});
// } catch (error) {
//   console.log('error from catch');
// }

import path from 'path';
const p = path.normalize('c/../') 
console.log(p);