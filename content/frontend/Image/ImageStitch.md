---
title: ImageStitch
---

`ImageStitch[{image1, image2, ...}]` gives a composed image from an unordered list of imagei.

- `ImageStitch[{{image11, image12, ...}, {image21, image22, ...}, ...}]` returns a stitched image from a matrix of images imageij, according to their array position.
- `ImageStitch[images, canvas]` projects the stitched image onto the geometry specified by canvas.

## Examples

```wolfram
ImageStitch[{img1, img2, img3}]
```

```wolfram
ImageStitch[{{leftImg, rightImg}}, "Cylindrical"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageStitch.html) for more details.