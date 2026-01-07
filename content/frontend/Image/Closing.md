---
title: Closing
---

`Closing[image, ker]` gives the morphological closing of image with respect to the structuring element ker.

`Closing[image, r]` gives the closing with respect to a range-r square.

`Closing[data, ...]` applies closing to an array of data.

## Examples

Apply morphological closing to an image:

```wolfram
Closing[img, 3]
```

With a custom structuring element:

```wolfram
Closing[img, DiskMatrix[5]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Closing.html) for more details.*