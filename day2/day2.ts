// import { readFileSync } from "fs";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const file = readFileSync(__dirname + "/items.txt", "utf8");

// const options = file.split(",").map((line) => line.trim());

// export function calculate(options: string[]): number {
//   let numberToTrack = 0;
//   for (const option of options) {
// const now = Temporal.Now.instant();
//     const [startValue, endValue] = option.split("-").map(Number);
//     for (let i = startValue; i <= endValue; i++) {
//       if (i.toString().length % 2 === 0) {
//         const firstHalf = i.toString().slice(0, i.toString().length / 2);
//         const secondHalf = i
//           .toString()
//           .slice(i.toString().length / 2, i.toString().length);

//         if (firstHalf === secondHalf) {
//           numberToTrack += i;
//         }
//       }
//     }
//   }
//   return numberToTrack;
// }

// console.log(calculate(options));

let yesterday = Temporal.Now.instant().subtract({
  hours: 24,
});

let tomorrow = Temporal.Now.instant().add({
  hours: 24,
});

console.log(`Yesterday: ${yesterday}`);
console.log(`Tomorrow: ${tomorrow}`);
