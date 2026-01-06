# GraphicsColumn

`GraphicsColumn[{g1, g2, …}]` generates a graphic in which the `gi` are laid out in a column, with `g1` above `g2`, etc.

- `GraphicsColumn[list, alignment]` aligns each element horizontally in the specified way.
- `GraphicsColumn[list, alignment, spacing]` leaves the specified spacing between successive elements.

## Examples

```wolfram
GraphicsColumn[{Plot[Sin[x], {x, 0, 2 Pi}], Plot[Cos[x], {x, 0, 2 Pi}]}]
```

```wolfram
GraphicsColumn[{Graphics[Circle[]], Graphics[Rectangle[]]}, Center, 0.1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphicsColumn.html) for more details.*