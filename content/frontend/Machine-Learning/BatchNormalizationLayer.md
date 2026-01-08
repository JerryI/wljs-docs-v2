---
title: BatchNormalizationLayer
---

`BatchNormalizationLayer[]` represents a trainable net layer that normalizes its input data by learning the data mean and variance.

## Examples

Create a batch normalization layer:

```wolfram
BatchNormalizationLayer[]
```

Add to a neural network chain:

```wolfram
NetChain[{LinearLayer[10], BatchNormalizationLayer[], Ramp}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BatchNormalizationLayer.html) for more details.