---
title: LongShortTermMemoryLayer
---

`LongShortTermMemoryLayer[n]` represents a trainable recurrent layer that takes a sequence of vectors and produces a sequence of vectors, each of size n.

- `LongShortTermMemoryLayer[n, opts]` includes options for weights and other parameters.

## Examples

Create an LSTM layer with output size 5:
```wolfram
LongShortTermMemoryLayer[5]
```

Build a sequence classification network:
```wolfram
net = NetChain[{LongShortTermMemoryLayer[32], SequenceLastLayer[], LinearLayer[10], SoftmaxLayer[]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LongShortTermMemoryLayer.html) for more details.