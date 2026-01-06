# ImagePyramidApply

`ImagePyramidApply[f, pyr]` applies f to all images in the `ImagePyramid` object pyr.

- `ImagePyramidApply[f, {pyr1, pyr2, ...}]` applies f to the sequence of corresponding levels taken from each pyri.

## Examples

```wolfram
pyr = ImagePyramid[ExampleData[{"TestImage", "Lena"}]];
ImagePyramidApply[ColorNegate, pyr]
```

```wolfram
ImagePyramidApply[ImageAdjust, pyr]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImagePyramidApply.html) for more details.*