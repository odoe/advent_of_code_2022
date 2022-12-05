import { readFileSync } from "fs";

function roundOne(data) {
  const lines = data.split("\n");

  let total = 0;

  while (lines.length) {
    const line = lines.shift();
    const ls = line.split(",");

    const r1 = ls[0];
    const r2 = ls[1];

    const xs1 = r1.split("-");
    const xs2 = r2.split("-");
    let from1 = Number(xs1[0]);
    let to1 = Number(xs1[1]);
    let from2 = Number(xs2[0]);
    let to2 = Number(xs2[1]);

    if (
      from1 >= from2 && to1 <= to2
      ||
      from2 >= from1 && to2 <= to1
    ) {
      total++;
    }
  }

  console.log(`My total round one score: ${total}`);
}

function roundTwo(data) {
  const lines = data.split("\n");

  let total = 0;

  while (lines.length) {
    const line = lines.shift();
    const ls = line.split(",");

    const r1 = ls[0];
    const r2 = ls[1];

    const xs1 = r1.split("-");
    const xs2 = r2.split("-");
    let from1 = Number(xs1[0]);
    let to1 = Number(xs1[1]);
    let from2 = Number(xs2[0]);
    let to2 = Number(xs2[1]);

    if (
      from1 <= from2 && from2 <= to1
      ||
      from1 <= to2 && to2 <= to1
      ||
      from2 <= from1 && from1 <= to2
      ||
      from2 <= to1 && to1 <= to2
    ) {
      total++;
    }
  }
  console.log(`My total round two score: ${total}`);
}
const data = readFileSync("../data/day04.txt", "utf8");
//   const data = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`;
roundOne(data);
roundTwo(data);
