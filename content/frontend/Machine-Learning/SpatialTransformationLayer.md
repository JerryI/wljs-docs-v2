---
title: SpatialTransformationLayer
---

`SpatialTransformationLayer[{h, w}]` represents a net layer that applies an affine transformation to an input of size c×h₀×w₀ and returns an output of size c×h×w.

## Examples

Create a spatial transformation layer:
```wolfram
SpatialTransformationLayer[{32, 32}]
```

Use in a neural network for image transformation:
```wolfram
net = NetChain[{SpatialTransformationLayer[{64, 64}]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpatialTransformationLayer.html) for more details.