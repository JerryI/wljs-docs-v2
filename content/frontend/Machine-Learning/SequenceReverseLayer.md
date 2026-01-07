---
title: SequenceReverseLayer
---

`SequenceReverseLayer[]` represents a net that reverses the order of an input sequence.

This layer is used in neural networks to reverse temporal or sequential data.

## Examples

```wolfram
SequenceReverseLayer[]
```

```wolfram
layer = SequenceReverseLayer[];
layer[{{1, 2, 3}, {4, 5, 6}}]
```

```wolfram
NetChain[{SequenceReverseLayer[], LongShortTermMemoryLayer[10]}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceReverseLayer.html) for more details.*