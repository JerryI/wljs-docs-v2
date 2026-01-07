---
title: SequenceRestLayer
---

`SequenceRestLayer[]` represents a net that takes a sequence of inputs and removes its first element.

## Examples

Create a sequence rest layer:

```wolfram
SequenceRestLayer[]
```

Use in a neural network:

```wolfram
NetChain[{SequenceRestLayer[], SummationLayer[]}]
```

Apply to sequence data:

```wolfram
net = NetInitialize[SequenceRestLayer[]];
net[{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceRestLayer.html) for more details.*