---
title: ImageExposureCombine
---

`ImageExposureCombine[{image1, image2, ...}]` combines differently exposed images of the same scene into a single image with good overall exposure.

## Examples

Combine exposures (HDR):

```wolfram
images = {darkImg, normalImg, brightImg};
ImageExposureCombine[images]
```

Create HDR output:

```wolfram
ImageExposureCombine[images, "HDR"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageExposureCombine.html) for more details.