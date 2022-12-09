import { readFileSync } from "fs";

/**
 *
 * @param {string} data
 */
function roundOne(data) {
  const chars = data.split("");

  let answer = "";

  for (let i = 0; i < chars.length; ++i) {
    const seq = chars.slice(i, i + 4);
    let counts = [];
    while (seq.length) {
      let val = seq.shift();
      if (!counts.includes(val)) {
        counts.push(val);
      }
    }
    if (counts.length === 4) {
      answer = (i + 4).toString();
      break;
    }
  }

  console.log(`Part 1 answer: ${answer}`);
}

/**
 *
 * @param {string} data
 */
function roundTwo(data) {
  const chars = data.split("");

  let answer = "";

  for (let i = 0; i < chars.length; ++i) {
    const seq = chars.slice(i, i + 14);
    let counts = [];
    while (seq.length) {
      let val = seq.shift();
      if (!counts.includes(val)) {
        counts.push(val);
      }
    }
    if (counts.length === 14) {
      answer = (i + 14).toString();
      break;
    }
  }

  console.log(`Part 2 answer: ${answer}`);
}

const data = readFileSync("../data/day06.txt", "utf8");
// const data = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;
// const data = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`;
// const data = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`;

roundOne(data);
roundTwo(data);
