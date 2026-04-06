---
title: ImageCompose
---

`ImageCompose[image, overlay]` gives the result of overlaying overlay onto image.

`ImageCompose[image, {overlay, α}]` uses alpha blending with fraction α.

## Examples

Overlay an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
overlay = Image[Graphics[{Red, Disk[]}], ImageSize -> 100];
ImageCompose[img, overlay]
```

With transparency:

```wolfram
ImageCompose[img, {overlay, 0.5}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageCompose.html) for more details.