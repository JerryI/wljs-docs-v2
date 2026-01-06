# Haloing

`Haloing[]` is a two‐dimensional directive specifying that graphics objects are to be drawn with a halo.

`Haloing[col]` uses the specified color col for the halo.

`Haloing[col,w]` uses the specified width w for the halo.

`Haloing[col,w,r]` applies a blur effect with radius r to the halo.

## Examples

Draw text with a white halo:

```wolfram
Graphics[{Haloing[White], Text["Hello", {0, 0}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Haloing.html) for more details.*