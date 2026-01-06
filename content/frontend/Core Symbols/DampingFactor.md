# DampingFactor

`DampingFactor` is an option for `FindRoot`, which can be used to control convergence behavior. `DampingFactor -> n` uses a damping factor of n in Newton's method.

## Examples

Use a damping factor:

```wolfram
FindRoot[Cos[x] - x, {x, 1}, DampingFactor -> 0.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DampingFactor.html) for more details.*