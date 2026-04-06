---
title: ImageLevels
---

`ImageLevels[image]` gives a list of pixel values and counts for each channel in image.

`ImageLevels[image,bspec]` bins pixel values using bin specification bspec.

`ImageLevels[image,bspec,range]` gives counts for bins in the given range.

## Examples

Get pixel value counts:

```wolfram
ImageLevels[ExampleData[{"TestImage", "Lena"}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageLevels.html) for more details.