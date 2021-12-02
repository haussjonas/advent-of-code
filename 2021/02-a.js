import { map, pipe, reduce, split } from "prelude";

const data = await Deno.readTextFile("2.input");

const result = pipe(
  split("\n"),
  map(split(" ")),
  map(([direction, unit]) => ({ direction, unit: parseInt(unit, 10) })),
  reduce(
    ({ position, depth }, { direction, unit }) => {
      if (direction === "forward") {
        return {
          position: position + unit,
          depth,
        };
      }

      if (direction === "up") {
        return {
          position,
          depth: depth - unit,
        };
      }

      if (direction === "down") {
        return {
          position,
          depth: depth + unit,
        };
      }

      return {
        position,
        depth,
      };
    },
    { position: 0, depth: 0 },
  ),
  ({ position, depth }) => position * depth,
)(data);

console.log(result);
