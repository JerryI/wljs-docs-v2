---
title: LossFunction
---

`LossFunction` is an option for `NetTrain` that specifies how to compare actual and requested outputs from a neural net.

## Examples

Train a network with cross-entropy loss:

```wolfram
NetTrain[net, data, LossFunction -> CrossEntropyLossLayer[]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LossFunction.html) for more details.*