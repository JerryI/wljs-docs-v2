# ImageCorrelate

`ImageCorrelate[image, ker]` gives the correlation of image with kernel ker.

`ImageCorrelate[image, ker, f]` computes a generalized correlation using function f.

## Examples

Correlate with a kernel:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageCorrelate[img, GaussianMatrix[3]]
```

Template matching:

```wolfram
template = ImageTake[img, {100, 150}, {100, 150}];
ImageCorrelate[img, template]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageCorrelate.html) for more details.*