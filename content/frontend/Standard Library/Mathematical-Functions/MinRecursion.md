# MinRecursion

`MinRecursion` is an option for `NIntegrate` and other numerical functions that use a recursive algorithm. With `MinRecursion -> n`, a minimum depth of recursion of n is used before tests for convergence begin.

This option ensures a minimum level of refinement in adaptive numerical algorithms.

## Examples

```wolfram
NIntegrate[Sin[x], {x, 0, Pi}, MinRecursion -> 2]
```

```wolfram
NIntegrate[1/Sqrt[x], {x, 0, 1}, MinRecursion -> 3]
```

```wolfram
Plot3D[Sin[x*y], {x, 0, 4}, {y, 0, 4}, MinRecursion -> 2]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinRecursion.html) for more details.*