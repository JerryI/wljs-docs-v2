---
title: GreaterThan
---

`GreaterThan[y]` is an operator form that yields `x > y` when applied to an expression x.

## Examples

Use as an operator:

```wolfram
Select[{1, 3, 5, 7, 9}, GreaterThan[4]]
(* {5, 7, 9} *)
```

With Map:

```wolfram
GreaterThan[5] /@ {3, 5, 7}
(* {False, False, True} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GreaterThan.html) for more details.