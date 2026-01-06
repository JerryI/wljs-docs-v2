# PreserveColor

`PreserveColor` is an option for `ImageRestyle` and related functions that specifies whether to preserve colors in the original image.

When set to `True`, the color scheme of the original image is maintained during restyling.

## Examples

```wolfram
ImageRestyle[image, styleImage, PreserveColor -> True]
```

```wolfram
ImageRestyle[photo, painting, PreserveColor -> False]
```

```wolfram
Options[ImageRestyle, PreserveColor]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PreserveColor.html) for more details.*