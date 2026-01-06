# ChanVeseBinarize

`ChanVeseBinarize[image]` finds a two-level segmentation of image by computing optimal contours around regions of consistent intensity in image.

`ChanVeseBinarize[image, marker]` uses marker to create an initial contour.

`ChanVeseBinarize[image, marker, {μ, ν, λ1, λ2}]` specifies the Chan–Vese weights.

## Examples

Binarize an image using Chan-Vese method:

```wolfram
ChanVeseBinarize[img]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChanVeseBinarize.html) for more details.*