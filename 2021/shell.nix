{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    deno

    (writeShellScriptBin "run-aoc" ''
      ${deno}/bin/deno run --import-map=import_map.json --allow-read "$1".js
    '')

    bashInteractive
  ];
}
