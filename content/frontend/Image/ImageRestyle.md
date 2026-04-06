---
title: ImageRestyle
---

`ImageRestyle[image, sample]` attempts to restyle image so as to follow the graphical style of sample.

- `ImageRestyle[image, w -> sample]` uses restyle weighting w.
- `ImageRestyle[image, {sample1, ...}]` attempts to restyle image using a blend of the graphical styles of the samplei.
- `ImageRestyle[image, {w1 -> sample1, ...}]` uses weightings wi for the samplei.

## Examples

```wolfram
ImageRestyle[ExampleData[{"TestImage", "Lena"}], ExampleData[{"TestImage", "Mandrill"}]]
```

```wolfram
ImageRestyle[img, 0.5 -> styleImage]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageRestyle.html) for more details.