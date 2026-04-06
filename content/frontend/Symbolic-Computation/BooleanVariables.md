---
title: BooleanVariables
---

`BooleanVariables[expr]` gives a list of the Boolean variables in the Boolean expression expr.

`BooleanVariables[bf]` gives the number of Boolean variables in the BooleanFunction object bf.

## Examples

```wolfram
BooleanVariables[a && b || c]
(* {a, b, c} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BooleanVariables.html) for more details.