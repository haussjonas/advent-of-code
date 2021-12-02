import {
  pipe,
  zip,
  tail,
  map,
  apply,
  lt,
  filter,
  length,
  split,
  identity,
} from "https://deno.land/x/ramda@v0.27.2/mod.ts";

const data = await Deno.readTextFile("1.input");

const result = pipe(
  split("\n"),
  map(parseInt),
  (x) => zip(identity(x), tail(x)),
  map(apply(lt)),
  filter(Boolean),
  length
)(data);

console.log(result)
