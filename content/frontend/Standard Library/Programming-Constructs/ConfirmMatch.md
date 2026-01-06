---
title: ConfirmMatch
---

`ConfirmMatch[expr, form]` confirms that expr matches the pattern form, otherwise throws an error to the nearest `Enclose`.

## Examples

Validate pattern:

```wolfram
Enclose[
  {a, b} = ConfirmMatch[getData[], {_Integer, _Integer}];
  a + b
]
(* Throws if getData[] doesn't return two integers *)
```

With error message:

```wolfram
ConfirmMatch[x, _List, "Expected a list"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConfirmMatch.html) for more details.*