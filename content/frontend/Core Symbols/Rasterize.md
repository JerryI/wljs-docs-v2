# Rasterize

`Rasterize[expr]` returns a rasterized version of the displayed form of expr.

- `Rasterize[expr, elem]` gives the element elem associated with the rasterized form of expr.
- `Rasterize[expr, {elem1, elem2, …}]` gives a list of the specified elemi.

## Examples

```wolfram
Rasterize[Plot[Sin[x], {x, 0, 2 Pi}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Rasterize.html) for more details.*