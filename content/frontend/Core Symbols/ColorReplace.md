# ColorReplace

`ColorReplace[image, color]` finds regions in image whose pixel values are similar to color and replaces them with transparent pixels.

`ColorReplace[image, color -> replacement]` replaces all pixels with the specified replacement color.

`ColorReplace[image, color -> replacement, d]` replaces pixels within distance d from color.

## Examples

Replace white with transparent:

```wolfram
ColorReplace[img, White]
```

Replace blue with red:

```wolfram
ColorReplace[img, Blue -> Red]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorReplace.html) for more details.*