# Weights

`Weights` is an option for various fitting and other functions which specifies weights to associate with data elements.

## Examples

```wolfram
LinearModelFit[{{1, 1}, {2, 3}, {3, 5}}, x, x, Weights -> {1, 2, 1}]
```

```wolfram
Mean[{1, 2, 3, 4}, Weights -> {1, 1, 2, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Weights.html) for more details.*