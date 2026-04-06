---
title: ImageLines
---

`ImageLines[image]` finds line segments in image and returns the coordinates of their endpoints.

`ImageLines[image, t]` uses threshold t for selecting lines.

## Examples

Detect lines in an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
lines = ImageLines[img];
HighlightImage[img, Line /@ lines]
```

With threshold:

```wolfram
ImageLines[img, 0.5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageLines.html) for more details.