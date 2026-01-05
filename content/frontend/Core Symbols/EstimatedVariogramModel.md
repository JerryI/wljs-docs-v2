# EstimatedVariogramModel

`EstimatedVariogramModel[{loc1 -> val1, loc2 -> val2, ...}]` estimates the best variogram function from values vali given at locations loci.

`EstimatedVariogramModel[{loc1, loc2, ...} -> {val1, val2, ...}]` generates the same result.

`EstimatedVariogramModel[..., "model"]` estimates the best parameters of the variogram function specified by "model".

`EstimatedVariogramModel[..., {"model", params}]` estimates the non-numeric parameters in params.

## Examples

Estimate a variogram from spatial data:

```wolfram
data = {{0, 0} -> 1.2, {1, 0} -> 1.5, {0, 1} -> 1.3, {1, 1} -> 1.8};
EstimatedVariogramModel[data]
```

Use a specific variogram model:

```wolfram
EstimatedVariogramModel[data, "Spherical"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EstimatedVariogramModel.html) for more details.*