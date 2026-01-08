---
title: NetArrayLayer
---

`NetArrayLayer[]` represents a layer that has no input and produces as output a constant array.

- `NetArrayLayer[opts]` includes options for the initial value of the array or output size.

This layer is useful for creating learnable constant parameters in neural networks.

## Examples

```wolfram
NetArrayLayer["Output" -> 3]
```

```wolfram
NetArrayLayer["Array" -> {1, 2, 3}]
```

```wolfram
NetInitialize[NetArrayLayer["Output" -> {2, 3}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetArrayLayer.html) for more details.