# MatrixPropertyDistribution

`MatrixPropertyDistribution[expr, x \[Distributed] mdist]` represents the distribution of the matrix property expr where the matrix-valued random variable x follows the matrix distribution mdist.

- `MatrixPropertyDistribution[expr, {x1 \[Distributed] mdist1, x2 \[Distributed] mdist2, …}]` represents the distribution where x1, x2, … are independent and follow the matrix distributions mdist1, mdist2, ….

## Examples

```wolfram
MatrixPropertyDistribution[Det[m], m \[Distributed] WishartMatrixDistribution[5, IdentityMatrix[3]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MatrixPropertyDistribution.html) for more details.*