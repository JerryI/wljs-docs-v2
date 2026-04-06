---
title: MachinePrecision
---

`MachinePrecision` is a symbol used to indicate machine-number precision.

## Examples

Request machine precision in numerical functions:

```wolfram
N[Pi, MachinePrecision]
```

Check the precision of a number:

```wolfram
Precision[1.5]
(* MachinePrecision *)
```

Use in NDSolve:

```wolfram
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 1}, 
  WorkingPrecision -> MachinePrecision]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MachinePrecision.html) for more details.