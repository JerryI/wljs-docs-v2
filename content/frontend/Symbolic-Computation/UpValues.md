---
title: UpValues
---

`UpValues[f]` gives a list of transformation rules corresponding to all upvalues (definitions for expressions containing `f`) defined for the symbol f.

## Examples

Define an upvalue:

```wolfram
g /: h[g] = 42;
UpValues[g]
(* {HoldPattern[h[g]] :> 42} *)
```

Upvalues allow a symbol to define how other functions handle it:

```wolfram
myType /: Length[myType[args___]] := Length[{args}];
Length[myType[a, b, c]]
(* 3 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UpValues.html) for more details.*