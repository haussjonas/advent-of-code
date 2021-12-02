import { filter, length, map, pipe, split, tail, zip } from "prelude";

const data = await Deno.readTextFile("1.input");

const result = pipe(
  split("\n"),
  map((x) => parseInt(x, 10)),
  (x) => zip(x, tail(x)),
  map(([a, b]) => a < b),
  filter(Boolean),
  length,
)(data);

console.log(result);
