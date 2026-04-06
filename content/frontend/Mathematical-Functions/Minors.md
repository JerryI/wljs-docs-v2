---
title: Minors
---

`Minors[m]` gives the minors of a matrix m. `Minors[m, k]` gives the kth minors.

## Examples

Minors of a matrix:

```wolfram
Minors[{{a, b}, {c, d}}]
(* {{a d - b c}} *)
```

2x2 minors of a 3x3 matrix:

```wolfram
Minors[{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}, 2]
(* {{-3, -6, -3}, {-6, -12, -6}, {-3, -6, -3}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Minors.html) for more details.