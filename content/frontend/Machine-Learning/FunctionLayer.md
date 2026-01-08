---
title: FunctionLayer
---

`FunctionLayer[f]` represents a net layer that applies function f to its input.

## Examples

Create a function layer that applies ReLU:

```wolfram
FunctionLayer[Ramp]
```

Apply a custom function:

```wolfram
layer = FunctionLayer[#^2 &];
layer[{1, 2, 3}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionLayer.html) for more details.