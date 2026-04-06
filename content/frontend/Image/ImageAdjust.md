---
title: ImageAdjust
---

`ImageAdjust[image]` adjusts the levels in image, rescaling them to cover the range 0 to 1.

`ImageAdjust[image, {c, b, g}]` adjusts contrast c, brightness b, and gamma g.

## Examples

Adjust image levels:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageAdjust[img]
```

Increase contrast and brightness:

```wolfram
ImageAdjust[img, {0.5, 0.2}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageAdjust.html) for more details.