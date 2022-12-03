import { readFileSync } from "fs";

// COLUMN 1
// A for Rock
// B for Paper
// C for Scissors

// COLUMN 2
// X for Rock
// Y for Paper
// Z for Scissors

// 0 if you lost
// 3 if the round was a draw
// 6 if you won

// 1 rock
// 2 paper
// 3 scissors

function roundOne() {
  let playValue = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  function versus(left, right) {
    let v =
      left === "A" && right === "X"
        ? 3
        : left === "A" && right === "Y"
        ? 6
        : left === "A" && right === "Z"
        ? 0
        : left === "B" && right === "X"
        ? 0
        : left === "B" && right === "Y"
        ? 3
        : left === "B" && right === "Z"
        ? 6
        : left === "C" && right === "X"
        ? 6
        : left === "C" && right === "Y"
        ? 0
        : left === "C" && right === "Z"
        ? 3
        : null;
    return v;
  }

  const data = readFileSync("../data/day02.txt", "utf8");
  const lines = data.split("\n");

  let scores = [];

  let total = 0;

  while (lines.length) {
    const val = lines.shift();

    let [user, me] = val.split(" ");

    let score = versus(user, me);
    total += score + playValue[me];
    scores.push(score + playValue[me]);
  }

  console.log(`My total round one score: ${total}`);
}

function roundTwo() {
  let playValue = {
    X: 0,
    Y: 3,
    Z: 6,
  };

  // X lose
  // Y draw
  // Z win

  // 1 rock
  // 2 paper
  // 3 scissors
  function versus(left, right) {
    let v =
      left === "A" && right === "X"
        ? 3
        : left === "A" && right === "Y"
        ? 1
        : left === "A" && right === "Z"
        ? 2
        : left === "B" && right === "X"
        ? 1
        : left === "B" && right === "Y"
        ? 2
        : left === "B" && right === "Z"
        ? 3
        : left === "C" && right === "X"
        ? 2
        : left === "C" && right === "Y"
        ? 3
        : left === "C" && right === "Z"
        ? 1
        : null;
    return v;
  }

  const data = readFileSync("../data/day02.txt", "utf8");
  const lines = data.split("\n");

  let scores = [];

  let total = 0;

  while (lines.length) {
    const val = lines.shift();

    let [user, me] = val.split(" ");

    let score = versus(user, me);
    total += score + playValue[me];
    scores.push(score + playValue[me]);
  }

  console.log(`My total round two score: ${total}`);
}

roundOne();
roundTwo();
