// Each pair holds two equations that share the same solution
export const PAIRS = [
  { id: 1, a: "2x = 8", b: "x \u2212 1 = 3" }, // x = 4
  { id: 2, a: "x + 5 = 12", b: "3x = 21" }, // x = 7
  { id: 3, a: "4x = 12", b: "x + 7 = 10" }, // x = 3
  { id: 4, a: "x \u2212 4 = 6", b: "2x = 20" }, // x = 10
  { id: 5, a: "5x = 25", b: "x + 3 = 8" }, // x = 5
  { id: 6, a: "x \u00f7 2 = 6", b: "x \u2212 4 = 8" }, // x = 12
  { id: 7, a: "x + 3 = 11", b: "4x = 32" }, // x = 8
  { id: 8, a: "4x = 24", b: "x + 2 = 8" }, // x = 6
  { id: 9, a: "x \u00f7 3 = 3", b: "2x \u2212 9 = 9" }, // x = 9
  { id: 10, a: "6x = 12", b: "x + 5 = 7" }, // x = 2
  { id: 11, a: "x \u2212 8 = 3", b: "3x \u2212 22 = 11" }, // x = 11
  { id: 12, a: "2x + 1 = 27", b: "x \u2212 7 = 6" }, // x = 13
  { id: 13, a: "x + 9 = 23", b: "2x = 28" }, // x = 14
  { id: 14, a: "3x \u2212 3 = 42", b: "x \u00f7 3 = 5" }, // x = 15
  { id: 15, a: "x \u2212 7 = 9", b: "2x = 32" }, // x = 16
  { id: 16, a: "2x + 5 = 39", b: "3x \u2212 15 = 36" }, // x = 17
  { id: 17, a: "x \u00f7 2 = 9", b: "3x = 54" }, // x = 18
  { id: 18, a: "x \u2212 11 = 8", b: "2x \u2212 1 = 37" }, // x = 19
  { id: 19, a: "4x = 80", b: "x \u2212 5 = 15" }, // x = 20
  { id: 20, a: "7x + 7 = 70", b: "5x \u2212 1 = 44" }, // x = 9
  { id: 21, a: "5x = 5", b: "x + 4 = 5" }, // x = 1
  { id: 22, a: "2x + 4 = 8", b: "x \u00f7 2 = 1" }, // x = 2
  { id: 23, a: "3x \u2212 6 = 9", b: "x + 6 = 11" }, // x = 5
  { id: 24, a: "5x + 5 = 25", b: "x \u00f7 2 = 2" }, // x = 4
  { id: 25, a: "2x \u2212 7 = 13", b: "x + 5 = 15" }, // x = 10
  { id: 26, a: "4x + 4 = 32", b: "x \u2212 2 = 5" }, // x = 7
  { id: 27, a: "x \u00f7 7 = 2", b: "3x + 2 = 44" }, // x = 14
  { id: 28, a: "6x \u2212 6 = 30", b: "x \u00f7 2 = 3" }, // x = 6
  { id: 29, a: "2x \u2212 1 = 3", b: "x + 4 = 6" }, // x = 2
  { id: 30, a: "4x \u2212 3 = 33", b: "2x = 18" }, // x = 9
];

// How many pairs appear on the board each game (= 16 cards)
export const PAIRS_PER_GAME = 8;

export const PAIR_COLORS = [
  "#e03b6b", // rose
  "#e07c3b", // orange
  "#c9b800", // yellow
  "#3bba5f", // green
  "#3bb8e0", // cyan
  "#3b6ee0", // blue
  "#2a9d8f", // teal
  "#e03bbf", // pink
  "#e05c3b", // vermillion
  "#7dbf3b", // lime
  "#3b8fe0", // sky
  "#9b5fe0", // violet
  "#e0a83b", // amber
  "#3be0a8", // mint
  "#e03b3b", // red
  "#3b3be0", // indigo
  "#a8e03b", // yellow-green
  "#e03ba8", // magenta
  "#3ba8e0", // light blue
  "#8fe03b", // chartreuse
  "#e08f3b", // gold
  "#3be08f", // seafoam
  "#8f3be0", // purple
  "#e0608f", // coral
  "#608fe0", // periwinkle
  "#6ae060", // grass
  "#e0c060", // golden
  "#60e0c0", // aqua
  "#c060e0", // lavender
  "#e06060", // salmon
];
