---
title: Depth
---

`Depth[expr]` gives the maximum number of indices needed to specify any part of expr, plus 1.

## Examples

Depth of expressions:

```wolfram
Depth[{a, b, c}]
(* 2 *)

Depth[{{1, 2}, {3, 4}}]
(* 3 *)

Depth[x]
(* 1 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Depth.html) for more details.