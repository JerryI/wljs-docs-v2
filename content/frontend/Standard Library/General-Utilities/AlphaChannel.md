---
title: AlphaChannel
---

`AlphaChannel[color]` returns the opacity of color.

`AlphaChannel[image]` returns the alpha channel of image.

`AlphaChannel[video]` returns a video containing the alpha channel of the frames in video.

## Examples

Get the opacity of a color:

```wolfram
AlphaChannel[RGBColor[1, 0, 0, 0.5]]
(* 0.5 *)
```

Extract alpha channel from an image:

```wolfram
AlphaChannel[img]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AlphaChannel.html) for more details.*