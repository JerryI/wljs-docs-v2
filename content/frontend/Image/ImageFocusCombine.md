---
title: ImageFocusCombine
---

`ImageFocusCombine[{image1, image2, ...}]` combines differently focused images of the same scene to obtain a single well-focused image.

## Examples

Combine focus-stacked images:

```wolfram
images = {nearFocus, midFocus, farFocus};
ImageFocusCombine[images]
```

Focus stacking for macro photography:

```wolfram
ImageFocusCombine[Import /@ FileNames["focus*.jpg"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageFocusCombine.html) for more details.*