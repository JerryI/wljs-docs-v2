---
title: NumericFunction
---

`NumericFunction` is an attribute that can be assigned to a symbol f to indicate that `f[arg1, arg2, ...]` should be considered a numeric quantity whenever all the argi are numeric quantities.

## Examples

```wolfram
SetAttributes[myFunc, NumericFunction]
NumericQ[myFunc[1, 2]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NumericFunction.html) for more details.