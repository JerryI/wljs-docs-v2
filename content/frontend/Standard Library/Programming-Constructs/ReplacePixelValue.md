---
title: ReplacePixelValue
---

`ReplacePixelValue[image, ppos -> val]` changes the pixel values at pixel position ppos in image to val.

- `ReplacePixelValue[image, ppos -> val, "type"]` assumes val to be of the specified type.

## Examples

```wolfram
ReplacePixelValue[ConstantImage[0, {5, 5}], {3, 3} -> 1]
```

```wolfram
ReplacePixelValue[img, {{1, 1}, {2, 2}} -> Red]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReplacePixelValue.html) for more details.*