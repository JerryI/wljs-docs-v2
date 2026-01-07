---
title: GatedRecurrentLayer
---

`GatedRecurrentLayer[n]` represents a trainable recurrent layer that takes a sequence of vectors and produces a sequence of vectors each of size n.

- `GatedRecurrentLayer[n, opts]` includes options for initial weights and other parameters.

## Examples

Create a GRU layer with 64 hidden units:

```wolfram
GatedRecurrentLayer[64]
```

Use in a neural network:

```wolfram
NetChain[{GatedRecurrentLayer[32], LinearLayer[10]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GatedRecurrentLayer.html) for more details.*