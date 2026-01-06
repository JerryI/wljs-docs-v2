# InverseFunctions

`InverseFunctions` is an option for `Solve` and related functions that specifies whether inverse functions should be used.

## Examples

```wolfram
Solve[Sin[x] == 1/2, x, InverseFunctions -> True]
```

```wolfram
Solve[Exp[x] == 2, x, InverseFunctions -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseFunctions.html) for more details.*