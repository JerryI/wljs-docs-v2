---
title: Adjugate
---

`Adjugate[m]` gives the adjugate (classical adjoint) of a square matrix m.

## Examples

Adjugate of a 2x2 matrix:

```wolfram
Adjugate[{{a, b}, {c, d}}]
(* {{d, -b}, {-c, a}} *)
```

Relation to inverse:

```wolfram
m = {{1, 2}, {3, 4}};
Adjugate[m] == Det[m] * Inverse[m]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Adjugate.html) for more details.