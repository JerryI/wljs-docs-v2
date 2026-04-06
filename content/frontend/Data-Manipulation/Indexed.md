---
title: Indexed
---

`Indexed[expr, i]` represents the component of expr with index i and formats as expr_i.

`Indexed[expr, {i, j, ...}]` uses multiple indices.

## Examples

Indexed variable:

```wolfram
Indexed[x, 1]
(* x_1 displayed with subscript *)
```

Multi-index:

```wolfram
Indexed[A, {i, j}]
(* A_{i,j} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Indexed.html) for more details.