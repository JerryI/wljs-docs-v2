---
title: CrossingDetect
---

`CrossingDetect[image]` gives a binary image in which white pixels correspond to the zero crossings in image.

`CrossingDetect[image,delta]` treats values in image that are smaller in absolute value than delta as zero.

`CrossingDetect[array,…]` gives a binary sparse array in which 1 corresponds to zero crossings in array.

## Examples

Detect zero crossings in an image:

```wolfram
img = LaplacianGaussianFilter[ExampleData[{"TestImage", "Lena"}], 2];
CrossingDetect[img]
(* Image[...] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CrossingDetect.html) for more details.