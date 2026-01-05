# MinDetect

`MinDetect[image]` gives a binary image in which white pixels correspond to constant extended minima in image.

`MinDetect[image, h]` finds extended minima where the range of values is not greater than h.

`MinDetect[data, ...]` applies minima detection to an array of data.

## Examples

Detect minima in an image:

```wolfram
MinDetect[GaussianMatrix[5]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinDetect.html) for more details.*