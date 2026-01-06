---
title: ReplaceImageValue
---

`ReplaceImageValue[image,pos->val]` changes the pixel values at position pos in image to val.

`ReplaceImageValue[image,pos->val,"type"]` assumes val to be of the specified type.

## Examples

```wolfram
ReplaceImageValue[ExampleData[{"TestImage", "Lena"}], {50, 50} -> Red]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReplaceImageValue.html) for more details.*