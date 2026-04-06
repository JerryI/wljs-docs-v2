---
title: LinearSolve
---

`LinearSolve[m, b]` finds a vector `x` that solves the matrix equation $m \cdot x = b$.

## Examples

Solve linear systems:

```wolfram
m = {{1, 2}, {3, 4}}
b = {5, 11}

LinearSolve[m, b]
(* {1, 2} *)

(* Verify: m . x = b *)
m . {1, 2}
(* {5, 11} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinearSolve.html) for more details.