# BooleanFunction

`BooleanFunction[k, n]` represents the kth Boolean function in n variables.

`BooleanFunction[values]` represents the Boolean function corresponding to the specified vector of truth values.

`BooleanFunction[spec, {a1, a2, ...}]` gives the Boolean expression in variables ai corresponding to the Boolean function specified by spec.

## Examples

The AND function:

```wolfram
BooleanFunction[8, 2][a, b]
(* a && b *)
```

From truth table:

```wolfram
BooleanFunction[{0, 0, 0, 1}][a, b]
(* a && b *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BooleanFunction.html) for more details.*