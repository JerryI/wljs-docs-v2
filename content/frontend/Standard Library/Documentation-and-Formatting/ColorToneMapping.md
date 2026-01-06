---
title: ColorToneMapping
---

`ColorToneMapping[image]` applies a tone mapping to color values in image so as to make variations of luminance visible even in small intervals of the dynamic range.

`ColorToneMapping[image,c]` maps colors by compressing the overall range of luminance values by a factor c.

`ColorToneMapping[image,range]` applies a mapping only to colors whose initial luminance lies in the specified range.

`ColorToneMapping[image,{range,c}]` takes the specified range of colors and compresses their overall luminance values by a factor c.

`ColorToneMapping[image,{{range1,c1},{range2,c2},…}]` uses different compression factors ci for different ranges rangei.

`ColorToneMapping[image,spec,s]` uses the color compensation factor s to correct for saturation distortion introduced during tone mapping.

## Examples

```wolfram
ColorToneMapping[img]
```

```wolfram
ColorToneMapping[img, 0.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorToneMapping.html) for more details.*