---
title: DistanceTransform
---

`DistanceTransform[image]` gives the distance transform of image, in which the value of each pixel is replaced by its distance to the nearest background pixel.

`DistanceTransform[image,t]` treats values above t as foreground.

## Examples

```wolfram
DistanceTransform[Binarize[ExampleData[{"TestImage", "Lena"}]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DistanceTransform.html) for more details.