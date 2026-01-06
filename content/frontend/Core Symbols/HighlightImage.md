# HighlightImage

`HighlightImage[image, roi]` highlights the specified region of interest roi in image.

`HighlightImage[image, {roi1, roi2, ...}]` highlights several regions of interest.

## Examples

Highlight a rectangular region:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
HighlightImage[img, Rectangle[{100, 100}, {200, 200}]]
```

Highlight detected edges:

```wolfram
HighlightImage[img, EdgeDetect[img]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HighlightImage.html) for more details.*