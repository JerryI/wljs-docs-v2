# DirichletDistribution

`DirichletDistribution[{α1, ..., αk+1}]` represents a Dirichlet distribution of dimension k with shape parameters αi.

## Examples

Create a Dirichlet distribution:

```wolfram
dist = DirichletDistribution[{1, 2, 3}]
```

Generate random samples:

```wolfram
RandomVariate[DirichletDistribution[{1, 1, 1}], 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirichletDistribution.html) for more details.*