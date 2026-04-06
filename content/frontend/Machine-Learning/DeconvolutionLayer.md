---
title: DeconvolutionLayer
---

`DeconvolutionLayer[n, sz]` represents a trainable deconvolutional net layer having n output channels and using kernels of size sz to compute the deconvolution.

`DeconvolutionLayer[n, {s}]` represents a layer performing one-dimensional deconvolutions with kernels of size s.

`DeconvolutionLayer[n, {h, w}]` represents a layer performing two-dimensional deconvolutions with kernels of size h×w.

`DeconvolutionLayer[n, kernel, opts]` includes options for initial kernels and other parameters.

## Examples

Create a 2D deconvolution layer:

```wolfram
DeconvolutionLayer[32, {3, 3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeconvolutionLayer.html) for more details.