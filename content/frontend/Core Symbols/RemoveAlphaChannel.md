# RemoveAlphaChannel

`RemoveAlphaChannel[color]` removes opacity from color.

`RemoveAlphaChannel[color, bg]` removes opacity by blending color with the background color bg.

`RemoveAlphaChannel[image, ...]` removes opacity from all pixels in image.

## Examples

Remove alpha channel from an image:

```wolfram
img = Image[{{1, 0.5}, {0.5, 1}}, ColorSpace -> "Grayscale"];
RemoveAlphaChannel[img]
```

Blend with a background color:

```wolfram
RemoveAlphaChannel[RGBColor[1, 0, 0, 0.5], White]
(* RGBColor[1., 0.5, 0.5] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoveAlphaChannel.html) for more details.*