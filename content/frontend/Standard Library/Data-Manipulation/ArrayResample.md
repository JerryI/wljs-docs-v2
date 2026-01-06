---
title: ArrayResample
---

`ArrayResample[array, {n1, n2, ...}]` resamples array to have dimensions {n1, n2, ...}.

`ArrayResample[array, dspec]` resamples array according to the dimension specification dspec.

`ArrayResample[array, dspec, scheme]` specifies resampling scheme, either point or bin based.

## Examples

Resample an array to a different size:

```wolfram
ArrayResample[{1, 4, 9, 16}, 8]
(* {1, 2.5, 4, 6.5, 9, 12.5, 16, 16} *)
```

Resample a 2D array:

```wolfram
ArrayResample[RandomReal[1, {3, 3}], {6, 6}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayResample.html) for more details.*