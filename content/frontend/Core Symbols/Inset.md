# Inset

`Inset[obj, pos]` places an object at position `pos` in a graphic. Useful for embedding plots, images, or text.

## Examples

Embed objects in graphics:

```wolfram
(* Inset text *)
Graphics[{
  Circle[],
  Inset["Center", {0, 0}]
}]

(* Inset a plot *)
plot = Plot[Sin[x], {x, 0, 2 Pi}, ImageSize -> 100]
Graphics[{Rectangle[], Inset[plot, {0.5, 0.5}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Inset.html) for more details.*