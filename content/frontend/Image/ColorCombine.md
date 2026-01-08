---
title: ColorCombine
---

`ColorCombine[{image1,image2,…}]` creates a multichannel image by combining the sequence of channels in the imagei.

`ColorCombine[{image1,image2,…},colorspace]` combines images that represent the color components specified by colorspace.

## Examples

Combine RGB channels:

```wolfram
ColorCombine[{redChannel, greenChannel, blueChannel}, "RGB"]
```

Create an image from separate color channels:

```wolfram
r = Image[RandomReal[1, {100, 100}]];
g = Image[RandomReal[1, {100, 100}]];
b = Image[RandomReal[1, {100, 100}]];
ColorCombine[{r, g, b}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorCombine.html) for more details.