/**
 * https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * solved by balocode
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
  const temp = [];
  let count = 0;
  for (let i = 0; i < q.length; i++) temp.push(i + 1);
  for (let i = 0; i < q.length; i++) {
    if (q[i] !== temp[i]) {
      let index = -1;
      let c = 0;
      for (let j = i + 1; j < i + 3 && j < q.length; j++) {
        c++;
        if (q[i] === temp[j]) {
          index = j;
          break;
        }
      }
      if (index === -1) return console.log('Too chaotic');
      for (let j = index; j > i; j--) {
        temp[j] = temp[j - 1];
      }
      temp[i] = q[i];
      count += c;
    }
  }
  console.log(count);
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const q = readLine()
      .split(' ')
      .map(qTemp => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
