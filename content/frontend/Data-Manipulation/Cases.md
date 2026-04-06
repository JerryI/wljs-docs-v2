---
title: Cases
---

`Cases[{e1, e2, ...}, pattern]` gives a list of the ei that match the pattern.

`Cases[{e1, ...}, pattern -> rhs]` gives a list of the values of rhs corresponding to the ei that match the pattern.

`Cases[expr, pattern, levelspec]` gives a list of all parts of expr on levels specified by levelspec that match the pattern.

## Examples

Find all integers:

```wolfram
Cases[{1, a, 2, b, 3}, _Integer]
(* {1, 2, 3} *)
```

Extract matching parts with transformation:

```wolfram
Cases[{f[1], g[2], f[3]}, f[x_] -> x]
(* {1, 3} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Cases.html) for more details.