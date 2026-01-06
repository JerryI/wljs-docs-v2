---
title: ParametricRampLayer
---

`ParametricRampLayer[]` represents a net layer that computes a leaky ReLU activation with a slope that can be learned.

- `ParametricRampLayer[levels]` specifies the levels on which each dimension has a specific slope.

## Examples

Create a parametric ramp layer:

```wolfram
ParametricRampLayer[]
```

Specify levels:

```wolfram
ParametricRampLayer[{2, 3}]
```

Use in a neural network:

```wolfram
NetChain[{LinearLayer[10], ParametricRampLayer[], LinearLayer[2]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParametricRampLayer.html) for more details.*