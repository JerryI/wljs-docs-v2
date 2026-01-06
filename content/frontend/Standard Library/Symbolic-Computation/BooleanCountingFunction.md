# BooleanCountingFunction

`BooleanCountingFunction[kmax, n]` represents a Boolean function of n variables that gives True if at most kmax variables are True.

`BooleanCountingFunction[{k}, n]` represents a function that gives True if exactly k variables are True.

`BooleanCountingFunction[{kmin, kmax}, n]` represents a function that gives True if between kmin and kmax variables are True.

## Examples

At most 2 of 4 variables true:

```wolfram
BooleanCountingFunction[2, 4][True, False, True, False]
(* True *)
```

Exactly 2 variables true:

```wolfram
BooleanCountingFunction[{2}, {a, b, c}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BooleanCountingFunction.html) for more details.*