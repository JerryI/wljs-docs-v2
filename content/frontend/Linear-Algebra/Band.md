---
title: Band
---

`Band[{i, j}]` represents the sequence of positions on the diagonal band that starts with {i, j} in a sparse array.

`Band[{imin, jmin, ...}, {imax, jmax, ...}]` represents the positions between {imin, jmin, ...} and {imax, jmax, ...}.

`Band[{imin, jmin, ...}, {imax, jmax, ...}, {di, dj, ...}]` represents positions starting with {imin, jmin, ...} and then moving with step {di, dj, ...}.

## Examples

Create a diagonal matrix:

```wolfram
SparseArray[Band[{1, 1}] -> {a, b, c}]
(* diagonal matrix with a, b, c on the diagonal *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Band.html) for more details.