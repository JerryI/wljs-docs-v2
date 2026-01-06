# TimeConstraint

`TimeConstraint` is an option for various functions that specifies the maximum time to spend doing a particular operation.

## Examples

Limit computation time for Simplify:
```wolfram
Simplify[complexExpression, TimeConstraint -> 5]
```

Use with NIntegrate to limit integration time:
```wolfram
NIntegrate[Sin[x^2], {x, 0, 100}, TimeConstraint -> 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeConstraint.html) for more details.*