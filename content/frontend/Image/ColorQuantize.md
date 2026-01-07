---
title: ColorQuantize
---

`ColorQuantize[image]` gives an approximation to image by quantizing to distinct colors.

`ColorQuantize[image, n]` uses at most n distinct colors.

`ColorQuantize[image, {col1, ..., coln}]` represents an image using only the specified colors.

## Examples

Quantize to 8 colors:

```wolfram
ColorQuantize[img, 8]
```

Quantize to specific palette:

```wolfram
ColorQuantize[img, {Red, Green, Blue, White, Black}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorQuantize.html) for more details.*