---
title: BlockMap
---

`BlockMap[f, list, n]` applies f to non-overlapping sublists of length n in list.

`BlockMap[f, list, n, d]` applies f to sublists with offset d in list.

`BlockMap[f, list, {n1, n2, ...}, ...]` applies f to blocks of size n1×n2×....

## Examples

Apply function to blocks of 2:

```wolfram
BlockMap[f, {a, b, c, d, e, f}, 2]
(* {f[{a, b}], f[{c, d}], f[{e, f}]} *)
```

Sum pairs:

```wolfram
BlockMap[Total, {1, 2, 3, 4, 5, 6}, 2]
(* {3, 7, 11} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BlockMap.html) for more details.*