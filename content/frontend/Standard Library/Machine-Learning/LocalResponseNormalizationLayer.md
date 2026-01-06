# LocalResponseNormalizationLayer

`LocalResponseNormalizationLayer[]` represents a net layer that normalizes its input by averaging across neighboring input channels.

## Examples

Create a local response normalization layer:

```wolfram
LocalResponseNormalizationLayer[]
```

Apply to input data:

```wolfram
layer = LocalResponseNormalizationLayer[];
layer[RandomReal[1, {5, 10, 10}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocalResponseNormalizationLayer.html) for more details.*