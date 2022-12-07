import { readFileSync } from "fs";

function roundOne(data) {
  const lines = data.split("\n");

  const instructions = [];
  const stacks = [];
  while (lines.length) {
    const line = lines.shift();

    if (line.includes("[")) {
      const matches = [...line.match(/(\[([^)])\]|\s\s\s\s)/g)];
      let len = matches.length;
      for (let i = 0; i < len; ++i) {
        if (matches[i].includes("[")) {
          if (!stacks[i]) {
            stacks[i] = [];
          }
          stacks[i].push(matches[i]);
        }
      }
    } else if (line.includes("move")) {
      instructions.push(line);
    }
  }

  for (let move of instructions) {
    const moves = move.split(" ");
    const count = moves[1];
    const from = moves[3];
    const to = moves[moves.length - 1];
    for (let i = 0; i < count; ++i) {
      let item = stacks[from - 1].shift();

      stacks[to - 1].unshift(item);
    }
  }

  let answer = [];

  for (let i = 0; i < stacks.length; ++i) {
    answer.push(stacks[i][0]);
  }

  // logging the answer kind of ugly, but works
  console.log(
    `Part 1 answer: ${answer
      .join("")
      .replaceAll("[", "")
      .replaceAll("]", "")
      .replaceAll(",", "")}`
  );
}

function roundTwo(data) {
  const lines = data.split("\n");

  const instructions = [];
  const stacks = [];
  while (lines.length) {
    const line = lines.shift();

    if (line.includes("[")) {
      const matches = [...line.match(/(\[([^)])\]|\s\s\s\s)/g)];
      let len = matches.length;
      for (let i = 0; i < len; ++i) {
        if (matches[i].includes("[")) {
          // make sure array exist to push into
          if (!stacks[i]) {
            stacks[i] = [];
          }
          stacks[i].push(matches[i]);
        }
      }
    } else if (line.includes("move")) {
      instructions.push(line);
    }
  }

  for (let move of instructions) {
    const moves = move.split(" ");
    const count = moves[1];
    const from = moves[3];
    const to = moves[moves.length - 1];

    let xs = stacks[from - 1].splice(0, count);
    stacks[to - 1].unshift(...xs);
  }

  let answer = [];

  for (let i = 0; i < stacks.length; ++i) {
    answer.push(stacks[i][0]);
  }

  // logging the answer kind of ugly, but works
  console.log(
    `Part 2 answer: ${answer
      .join("")
      .replaceAll("[", "")
      .replaceAll("]", "")
      .replaceAll(",", "")}`
  );
}
const data = readFileSync("../data/day05.txt", "utf8");
// const data = `
//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`;

roundOne(data);
roundTwo(data);
