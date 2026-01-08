---
title: ImageSaliencyFilter
---

`ImageSaliencyFilter[image]` returns a saliency map for image, highlighting visually prominent regions.

## Examples

Compute saliency map:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageSaliencyFilter[img]
```

Threshold saliency:

```wolfram
Binarize[ImageSaliencyFilter[img], 0.5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageSaliencyFilter.html) for more details.