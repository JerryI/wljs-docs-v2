---
title: Binarize
---

`Binarize[image]` creates a binary image from image by replacing all values above a globally determined threshold with 1 and others with 0.

`Binarize[image, t]` creates a binary image by replacing all values above t with 1 and others with 0.

`Binarize[image, {t1, t2}]` creates a binary image by replacing all values in the range t1 through t2 with 1 and others with 0.

`Binarize[image, f]` creates a binary image by replacing all channel value lists for which f[v] yields True with 1 and others with 0.

## Examples

Binarize an image with automatic threshold:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
Binarize[img]
```

Binarize with a specific threshold:

```wolfram
Binarize[img, 0.5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Binarize.html) for more details.