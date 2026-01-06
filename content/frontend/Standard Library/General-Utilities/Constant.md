# Constant

`Constant` is an attribute that indicates zero derivative of a symbol with respect to all parameters.

## Examples

Define a symbol as a constant:

```wolfram
SetAttributes[c, Constant]
D[c x^2, x]
(* 2 c x *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Constant.html) for more details.*