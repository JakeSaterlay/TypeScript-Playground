import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = readFileSync(__dirname + "/items.txt", "utf8");

const commands = file.split("\n").map((line) => line.trim());

interface CommandResult {
  final: number;
  zeroHits: number;
}

export function processDialCommands(
  start: number,
  commands: string[]
): CommandResult {
  let position = start;
  let zeroHits = 0;
  const MAX = 100;

  for (const cmd of commands) {
    const direction = cmd[0];
    const amount = Number(cmd.slice(1));

    if (direction === "L") {
      position = (position - amount) % MAX;
      if (position < 0) position += MAX;
    } else {
      position = (position + amount) % MAX;
    }
    if (position === 0) {
      zeroHits++;
    }
  }

  return { final: position, zeroHits };
}

console.log(processDialCommands(50, commands));
