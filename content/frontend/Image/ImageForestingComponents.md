---
title: ImageForestingComponents
---

`ImageForestingComponents[image]` finds a segmentation of image, returning an integer matrix in which positive integers label different components.

`ImageForestingComponents[image,marker]` tries to find a segmentation into components that include pixels indicated by marker.

`ImageForestingComponents[image,marker,r]` finds components that are connected at a pixel scale given by r.

`ImageForestingComponents[video,…]` computes components for each frame in video.

## Examples

Segment an image into components:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageForestingComponents[img]
```

Use markers for guided segmentation:

```wolfram
ImageForestingComponents[img, {{100, 100} -> 1, {200, 200} -> 2}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageForestingComponents.html) for more details.