---
title: ColorSeparate
---

`ColorSeparate[image]` gives a list of single-channel images corresponding to each of the color channels in image.

`ColorSeparate[image, colorspace]` gives a list of images corresponding to the components of colorspace.

`ColorSeparate[image, channel]` returns a single-channel image containing the specified channel.

## Examples

Separate RGB channels:

```wolfram
{r, g, b} = ColorSeparate[img]
```

Get the red channel:

```wolfram
ColorSeparate[img, "R"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorSeparate.html) for more details.