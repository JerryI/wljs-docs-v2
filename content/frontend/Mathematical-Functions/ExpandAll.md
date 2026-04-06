---
title: ExpandAll
---

`ExpandAll[expr]` expands out all products and integer powers in any part of expr.

`ExpandAll[expr, patt]` avoids expanding parts of expr that do not contain terms matching the pattern patt.

## Examples

```wolfram
ExpandAll[(1 + x)^2 (1 + y)^2]
(* 1 + 2 x + x^2 + 2 y + 4 x y + 2 x^2 y + y^2 + 2 x y^2 + x^2 y^2 *)
```

```wolfram
ExpandAll[(a + b)^2 / (c + d)^2]
(* (a^2 + 2 a b + b^2)/(c^2 + 2 c d + d^2) *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExpandAll.html) for more details.