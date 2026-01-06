---
title: GraphicsRow
---

`GraphicsRow[{g1, g2, …}]` generates a graphic in which the `gi` are laid out in a row.

- `GraphicsRow[list, spacing]` leaves the specified spacing between successive elements.

## Examples

```wolfram
GraphicsRow[{Plot[Sin[x], {x, 0, 2 Pi}], Plot[Cos[x], {x, 0, 2 Pi}]}]
```

```wolfram
GraphicsRow[Table[Graphics[{Hue[i/5], Disk[]}], {i, 5}], 0.05]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphicsRow.html) for more details.*