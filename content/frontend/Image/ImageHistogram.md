---
title: ImageHistogram
---

`ImageHistogram[image]` plots a histogram of the pixel levels for each channel in image.

`ImageHistogram[image, bspec]` uses bin specification bspec.

## Examples

Display image histogram:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageHistogram[img]
```

With specific bins:

```wolfram
ImageHistogram[img, 64]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageHistogram.html) for more details.