---
title: FindFormula
---

`FindFormula[data]` finds a pure function that approximates data.

- `FindFormula[data,x]` finds a symbolic function of the variable x that approximates data.
- `FindFormula[data,x,n]` finds up to n functions that approximate data.
- `FindFormula[data,x,n,prop]` returns up to n best functions associated with property prop.
- `FindFormula[data,x,n,{prop1,prop2,…}]` returns up to n best functions associated with properties prop1, prop2, etc.

## Examples

```wolfram
(* Find a formula from data *)
data = Table[{x, x^2 + 2x}, {x, 0, 5}];
FindFormula[data, x]

(* Find multiple candidate formulas *)
FindFormula[data, x, 3]

(* Get specific properties *)
FindFormula[data, x, 1, "BIC"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindFormula.html) for more details.