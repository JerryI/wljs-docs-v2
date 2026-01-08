---
title: FoldPair
---

`FoldPair[f, y0, list]` gives the last element of `FoldPairList[f, y0, list]`.

## Examples

Generate with state:

```wolfram
FoldPair[{#1 + #2, #1 + #2} &, 0, {1, 2, 3, 4}]
(* 10 *)
```

Running total with pair:

```wolfram
FoldPair[{#1 + #2, #1 + #2} &, 0, Range[5]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FoldPair.html) for more details.