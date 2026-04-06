---
title: BlankSequence
---

`__` (two underscores) or `BlankSequence[]` is a pattern that can stand for any sequence of one or more expressions.

`__h` can stand for a sequence of one or more expressions with head h.

## Examples

Match one or more arguments:

```wolfram
f[x__] := {x}
f[a, b, c]
(* {a, b, c} *)
```

In replacement:

```wolfram
{1, 2, 3, 4} /. {__, x_} :> x
(* 4 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BlankSequence.html) for more details.