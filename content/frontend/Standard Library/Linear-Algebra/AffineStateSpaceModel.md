# AffineStateSpaceModel

`AffineStateSpaceModel[{a, b, c, d}, x]` represents the affine state-space model x'(t) = a(x(t)) + b(x(t)).u(t), y(t) = c(x(t)) + d(x(t)).u(t).

`AffineStateSpaceModel[sys]` gives an affine state-space model corresponding to the system model sys.

## Examples

Create a simple affine state-space model:

```wolfram
AffineStateSpaceModel[{{{-1}}, {{1}}, {{1}}, {{0}}}, {x}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AffineStateSpaceModel.html) for more details.*