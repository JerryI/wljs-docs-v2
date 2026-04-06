---
title: HoldPattern
---

`HoldPattern[expr]` is equivalent to expr for pattern matching, but maintains expr in an unevaluated form.

## Examples

Match unevaluated expressions:

```wolfram
Cases[{1 + 1, 2 + 2, Hold[3 + 3]}, HoldPattern[_ + _]]
(* {1 + 1, 2 + 2} - matches before evaluation *)
```

Use in rules:

```wolfram
{1 + 1, 2 + 3} /. HoldPattern[a_ + b_] :> {a, b}
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HoldPattern.html) for more details.