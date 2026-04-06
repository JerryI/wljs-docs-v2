---
title: IndependentUnit
---

`IndependentUnit[string]` represents a unit string with no relationship to other units within a Quantity.

## Examples

```wolfram
Quantity[5, IndependentUnit["apples"]]
(* 5 apples *)
```

```wolfram
Quantity[3, IndependentUnit["widgets"]] + Quantity[2, IndependentUnit["widgets"]]
(* 5 widgets *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IndependentUnit.html) for more details.