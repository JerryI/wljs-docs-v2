---
title: Delete
---

`Delete[expr, n]` deletes the element at position n in expr.

## Examples

Delete at position:

```wolfram
Delete[{a, b, c, d}, 2]
(* {a, c, d} *)
```

Delete from the end:

```wolfram
Delete[{a, b, c, d}, -1]
(* {a, b, c} *)
```

Delete multiple positions:

```wolfram
Delete[{a, b, c, d}, {{1}, {3}}]
(* {b, d} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Delete.html) for more details.