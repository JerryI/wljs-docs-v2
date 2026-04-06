---
title: Laplacian
---

`Laplacian[f, {x1, ..., xn}]` gives the Laplacian ∂²f/∂x1² + ... + ∂²f/∂xn².

## Examples

Laplacian of a function:

```wolfram
Laplacian[x^2 + y^2 + z^2, {x, y, z}]
(* 6 *)
```

2D Laplacian:

```wolfram
Laplacian[Sin[x] Cos[y], {x, y}]
(* -2 Cos[y] Sin[x] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Laplacian.html) for more details.