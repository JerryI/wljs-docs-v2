---
title: SubValues
---

`SubValues[f]` gives a list of transformation rules corresponding to all subvalues (values for f[...][...]...) defined for the symbol f.

## Examples

Define and retrieve subvalues:

```wolfram
f[x_][y_] := x + y;
SubValues[f]
(* {HoldPattern[f[x_][y_]] :> x + y} *)
```

Check subvalues of a symbol:

```wolfram
g[a_][b_][c_] := a*b*c;
SubValues[g]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SubValues.html) for more details.