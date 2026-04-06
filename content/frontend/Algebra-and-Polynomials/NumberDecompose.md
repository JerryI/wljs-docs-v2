---
title: NumberDecompose
---

`NumberDecompose[x, {u1, ..., un}]` returns a list of coefficients {c1, ..., cn} of a decomposition of the number x in the basis {u1, ..., un}.

## Examples

Decompose into hours, minutes, seconds:

```wolfram
NumberDecompose[3723, {3600, 60, 1}]
(* {1, 2, 3} *)
```

Money decomposition:

```wolfram
NumberDecompose[87, {20, 10, 5, 1}]
(* {4, 0, 1, 2} *)
```

Time units:

```wolfram
NumberDecompose[90061, {86400, 3600, 60, 1}]
(* {1, 1, 1, 1} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NumberDecompose.html) for more details.