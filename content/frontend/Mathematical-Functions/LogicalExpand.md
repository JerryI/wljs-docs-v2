---
title: LogicalExpand
---

`LogicalExpand[expr]` expands out logical combinations of equations, inequalities, and other functions.

## Examples

Expand logical expression:

```wolfram
LogicalExpand[(a || b) && c]
(* (a && c) || (b && c) *)
```

With inequalities:

```wolfram
LogicalExpand[Abs[x] < 1]
(* -1 < x < 1 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LogicalExpand.html) for more details.