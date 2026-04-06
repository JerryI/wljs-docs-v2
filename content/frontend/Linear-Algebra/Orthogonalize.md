---
title: Orthogonalize
---

`Orthogonalize[{v1, v2, ...}]` gives an orthonormal basis found by orthogonalizing the vectors vi.

## Examples

Orthonormalize vectors:

```wolfram
Orthogonalize[{{1, 0, 1}, {1, 1, 0}, {0, 1, 1}}]
(* {{1/Sqrt[2], 0, 1/Sqrt[2]}, {1/Sqrt[6], Sqrt[2/3], -1/Sqrt[6]}, ...} *)
```

Simple 2D example:

```wolfram
Orthogonalize[{{1, 1}, {1, 0}}]
(* {{1/Sqrt[2], 1/Sqrt[2]}, {1/Sqrt[2], -1/Sqrt[2]}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Orthogonalize.html) for more details.