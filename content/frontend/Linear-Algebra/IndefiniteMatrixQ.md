---
title: IndefiniteMatrixQ
---

`IndefiniteMatrixQ[m]` gives `True` if m is explicitly indefinite (has both positive and negative eigenvalues), and `False` otherwise.

## Examples

Test for indefinite matrix:

```wolfram
IndefiniteMatrixQ[{{1, 0}, {0, -1}}]
(* True *)
```

Definite matrix:

```wolfram
IndefiniteMatrixQ[{{1, 0}, {0, 1}}]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IndefiniteMatrixQ.html) for more details.