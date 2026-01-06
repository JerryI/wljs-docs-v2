# BooleanTable

`BooleanTable[bf]` gives a list of truth values for all possible combinations of variable values supplied to the Boolean function bf.

`BooleanTable[expr, {a1, a2, ...}]` gives a list of truth values of the Boolean expression expr for all combinations of values of the ai.

## Examples

Truth table for AND:

```wolfram
BooleanTable[a && b, {a, b}]
(* {False, False, False, True} *)
```

Truth table for OR:

```wolfram
BooleanTable[a || b, {a, b}]
(* {False, True, True, True} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BooleanTable.html) for more details.*