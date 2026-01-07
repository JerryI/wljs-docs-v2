---
title: FourierDCTFilter
---

`FourierDCTFilter[image,t]` reduces noise in image by locally thresholding the discrete cosine transforms of overlapping subimages, using the hard threshold t.

## Examples

Reduce noise in an image:

```wolfram
noisyImg = ImageAdd[ExampleData[{"TestImage", "Lena"}], RandomImage[{-0.1, 0.1}, {512, 512}]];
FourierDCTFilter[noisyImg, 0.1]
(* Image[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierDCTFilter.html) for more details.*