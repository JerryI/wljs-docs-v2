# ConditionalExpression

`ConditionalExpression[expr, cond]` is a symbolic construct that represents the expression expr when the condition cond is True.

## Examples

Create a conditional expression:

```wolfram
ConditionalExpression[x^2, x > 0]
```

Solve an equation with conditions:

```wolfram
Solve[x^2 == 4, x]
(* {{x -> ConditionalExpression[-2, True]}, {x -> ConditionalExpression[2, True]}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConditionalExpression.html) for more details.*