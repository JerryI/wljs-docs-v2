---
title: InverseDistanceTransform
---

`InverseDistanceTransform[image]` gives the inverse distance transform of image, returning a binary image.

## Examples

Apply inverse distance transform:

```wolfram
dist = DistanceTransform[Binarize[img]];
InverseDistanceTransform[dist]
```

Reconstruct from distance:

```wolfram
InverseDistanceTransform[Image[{{0, 1, 0}, {1, 2, 1}, {0, 1, 0}}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseDistanceTransform.html) for more details.