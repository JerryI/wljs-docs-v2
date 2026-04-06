---
title: ImageApply
---

`ImageApply[f, image]` applies the function f to the list of channel values for each pixel in image.

`ImageApply[f, {image1, image2, ...}]` applies f to corresponding pixel values from each image.

## Examples

Invert an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageApply[1 - # &, img]
```

Apply to multiple images:

```wolfram
ImageApply[Mean, {img, ColorNegate[img]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageApply.html) for more details.