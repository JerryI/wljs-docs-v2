# SetAlphaChannel

`SetAlphaChannel[color]` adds full opacity to color.

`SetAlphaChannel[color, a]` adds opacity a to color.

`SetAlphaChannel[image, ...]` adds an alpha channel to image.

## Examples

Add opacity to a color:

```wolfram
SetAlphaChannel[Red, 0.5]
(* RGBColor[1, 0, 0, 0.5] *)
```

Add alpha channel to an image:

```wolfram
img = Image[{{1, 0}, {0, 1}}];
SetAlphaChannel[img, 0.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetAlphaChannel.html) for more details.*