---
title: FoldPairList
---

`FoldPairList[f, y0, {a1, a2, ...}]` gives the list of successive xi obtained by applying f to pairs, where f returns `{xi, yi}` at each step.

## Examples

Running total with outputs:

```wolfram
FoldPairList[{#1 + #2, #1 + #2} &, 0, {1, 2, 3, 4}]
(* {1, 3, 6, 10} *)
```

Generate Fibonacci-like sequence:

```wolfram
FoldPairList[{#1, #1 + #2} &, 1, Range[6]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FoldPairList.html) for more details.