---
title: OwnValues
---

`OwnValues[x]` gives a list of transformation rules corresponding to all ownvalues (direct values) defined for the symbol x.

## Examples

Get the value assigned to a symbol:

```wolfram
x = 5;
OwnValues[x]
(* {HoldPattern[x] :> 5} *)
```

Compare with DownValues:

```wolfram
f = 10;         (* OwnValue *)
f[x_] := x^2;   (* DownValue *)
OwnValues[f]
(* {HoldPattern[f] :> 10} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OwnValues.html) for more details.