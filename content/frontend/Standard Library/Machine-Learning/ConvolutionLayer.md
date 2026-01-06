---
title: ConvolutionLayer
---

`ConvolutionLayer[n, s]` represents a trainable convolutional net layer having n output channels and using kernels of size s to compute the convolution.

`ConvolutionLayer[n, {s}]` represents a layer performing one-dimensional convolutions with kernels of size s.

`ConvolutionLayer[n, {h, w}]` represents a layer performing two-dimensional convolutions with kernels of size h×w.

`ConvolutionLayer[n, {h, w, d}]` represents three-dimensional convolutions with kernels of size h×w×d.

## Examples

Create a 2D convolutional layer:

```wolfram
ConvolutionLayer[32, {3, 3}]
```

Create a 1D convolutional layer:

```wolfram
ConvolutionLayer[16, {5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConvolutionLayer.html) for more details.*