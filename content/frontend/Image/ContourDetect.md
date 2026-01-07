---
title: ContourDetect
---

`ContourDetect[image]` gives a binary image in which white pixels correspond to the zeros and zero crossings in image.

`ContourDetect[image, delta]` treats values in image that are smaller in absolute value than delta as zero.

`ContourDetect[array, ...]` gives a binary sparse array in which 1 corresponds to zeros and zero crossings in array.

## Examples

Detect contours in an image:

```wolfram
ContourDetect[img]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContourDetect.html) for more details.*