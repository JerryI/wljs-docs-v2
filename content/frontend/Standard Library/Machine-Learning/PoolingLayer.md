# PoolingLayer

`PoolingLayer[sz]` represents a pooling net layer using kernels of size sz.

`PoolingLayer[{w}]` represents a layer performing one-dimensional pooling with kernels of size w.

`PoolingLayer[{h, w}]` represents a layer performing two-dimensional pooling with kernels of size h×w.

`PoolingLayer[{h, w, d}]` represents a layer performing three-dimensional pooling with kernels of size h×w×d.

`PoolingLayer[kernel, stride]` represents a layer that uses stride as the step size between kernel applications.

`PoolingLayer[kernel, opts]` includes options for other pooling methods, padding and other parameters.

## Examples

```wolfram
PoolingLayer[{2, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PoolingLayer.html) for more details.*