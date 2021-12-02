import { map, pipe, reduce, split } from "prelude";

const data = await Deno.readTextFile("2.input");

const result = pipe(
  split("\n"),
  map(split(" ")),
  map(([direction, unit]) => ({ direction, unit: parseInt(unit, 10) })),
  reduce(({ position, depth, aim }, { direction, unit }) => {
    if (direction === "forward") {
      return {
        position: position + unit,
        depth: depth + aim * unit,
        aim,
      };
    }

    if (direction === "up") {
      return {
        position,
        depth,
        aim: aim - unit,
      };
    }

    if (direction === "down") {
      return {
        position,
        depth,
        aim: aim + unit,
      };
    }

    return {
      position,
      depth,
      aim,
    };
  }, { position: 0, depth: 0, aim: 0 }),
  ({ position, depth }) => position * depth,
)(data);

console.log(result);
