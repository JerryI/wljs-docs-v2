# BiweightLocation

`BiweightLocation[list]` gives the value of the biweight location estimator of the elements in list.

`BiweightLocation[list, c]` gives the value of the biweight location estimator with scaling parameter c.

## Examples

Robust location estimate:

```wolfram
BiweightLocation[{1, 2, 3, 4, 100}]
```

Compare with median:

```wolfram
{BiweightLocation[{1, 2, 3, 4, 100}], Median[{1, 2, 3, 4, 100}]}
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BiweightLocation.html) for more details.*