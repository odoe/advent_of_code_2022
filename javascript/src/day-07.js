import { readFileSync } from "fs";

function createNode() {
  const node = {
    name: "/",
    isDir: true,
    children: [],
    parrent: null,
  };

  let currNode = node;
}

/**
 *
 * @param {string} data
 */
function roundOne(data) {
  const lines = data.split("\n");

  const node = {
    name: "/",
    isDir: true,
    children: [],
  };

  let currNode = node;
  let currCommand = null;

  while (lines.length) {
    const line = lines.shift();

    if (line[0] === "$") {
      // command
      currCommand = line[0];
      const match = /\$ (?<command>\w+)(?: (?<arg>.+))?/.exec(line);
      console.log(match.groups.command);
      console.log(match.groups.arg);
      currCommand = match.groups.command;

      if (currCommand === "cd") {
        const target = match.groups.arg;
        if (target === "/") {
          currNode = node;
        } else if (target === "..") {
          currNode = currNode?.parent;
        } else {
          currNode = currNode?.children.find(
            (x) => x.isDir && x.name === target
          );
        }
      }
    }
  }

  console.log(`Part 1 answer: ${""}`);
}

/**
 *
 * @param {string} data
 */
function roundTwo(data) {
  const chars = data.split("");

  let answer = "";

  console.log(`Part 2 answer: ${answer.size}`);
}

// const data = readFileSync("../data/day07.txt", "utf8");
const data = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

roundOne(data);
roundTwo(data);
