---
title: Fold
---

`Fold[f, x, list]` gives the last element of `FoldList[f, x, list]`.

`Fold[f, list]` is equivalent to `Fold[f, First[list], Rest[list]]`.

## Examples

Sum a list using Fold:

```wolfram
Fold[Plus, 0, {1, 2, 3, 4}]
(* 10 *)
```

Build a nested expression:

```wolfram
Fold[f, x, {a, b, c}]
(* f[f[f[x, a], b], c] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Fold.html) for more details.