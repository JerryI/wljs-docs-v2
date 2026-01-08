---
title: TopHatTransform
---

`TopHatTransform[image, ker]` gives the morphological top-hat transform of *image* with respect to structuring element *ker*.

- `TopHatTransform[image, r]` gives the top-hat transform with respect to a range-*r* square.
- `TopHatTransform[data, ...]` applies top-hat transform to an array of *data*.

## Examples

```wolfram
TopHatTransform[DiskMatrix[20], 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TopHatTransform.html) for more details.