# DownValues

`DownValues[f]` gives a list of transformation rules corresponding to all downvalues (definitions for `f[...]`) defined for the symbol f.

## Examples

Get function definitions as rules:

```wolfram
f[x_] := x^2;
f[0] = 1;
DownValues[f]
(* {HoldPattern[f[0]] :> 1, HoldPattern[f[x_]] :> x^2} *)
```

Modify definitions programmatically:

```wolfram
DownValues[g] = {HoldPattern[g[x_]] :> x + 1};
g[5]
(* 6 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DownValues.html) for more details.*