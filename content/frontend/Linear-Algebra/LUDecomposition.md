---
title: LUDecomposition
---

`LUDecomposition[m]` generates a representation of the LU decomposition of a square matrix m.

## Examples

LU decomposition:

```wolfram
LUDecomposition[{{1, 2}, {3, 4}}]
(* {{{3, 4}, {1/3, 2/3}}, {2, 1}, 1} *)
```

LU of a 3x3 matrix:

```wolfram
LUDecomposition[{{2, 1, 1}, {4, 3, 3}, {8, 7, 9}}]
(* {{{8, 7, 9}, {1/4, -3/4, -5/4}, {1/2, 2/3, 2/3}}, {3, 2, 1}, 1} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LUDecomposition.html) for more details.