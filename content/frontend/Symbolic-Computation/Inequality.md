---
title: Inequality
---

`Inequality` represents a sequence of relational statements.

## Examples

Chain inequalities:

```wolfram
Inequality[1, Less, x, LessEqual, 5]
(* 1 < x <= 5 *)
```

Use with Reduce:

```wolfram
Reduce[Inequality[0, Less, x, Less, 1], x]
(* 0 < x < 1 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Inequality.html) for more details.