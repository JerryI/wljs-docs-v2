---
title: ExpandDenominator
---

`ExpandDenominator[expr]` expands out products and powers that appear as denominators in expr.

## Examples

Expand a denominator:

```wolfram
ExpandDenominator[1/(a + b)^2]
(* 1/(a^2 + 2 a b + b^2) *)
```

Only the denominator is expanded:

```wolfram
ExpandDenominator[(x + y)^2/(a + b)^2]
(* (x + y)^2/(a^2 + 2 a b + b^2) *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExpandDenominator.html) for more details.