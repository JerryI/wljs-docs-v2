---
title: LinearGradientFilling
---

`LinearGradientFilling[{col1, col2, ..., coln}]` is a two-dimensional graphics directive specifying that faces of polygons and other filled graphics objects are to be drawn using a progressive transition between colors coli along a straight horizontal line.

- `LinearGradientFilling[{pos1, pos2, ..., posn} -> {col1, col2, ..., coln}]` uses the colors coli at the scaled positions posi.
- `LinearGradientFilling[{pos1, pos2, ..., posn} -> {col1, col2, ..., coln}, dir]` draws along the straight line with a direction dir.
- `LinearGradientFilling[{pos1, ..., posn} -> {col1, ..., coln}, dir, padding]` uses the specified padding when drawing beyond the boundary positions pos1 and posn.

## Examples

```wolfram
Graphics[{LinearGradientFilling[{Red, Blue}], Disk[]}]
```

```wolfram
Graphics[{LinearGradientFilling[{0, 0.5, 1} -> {Red, White, Blue}], Rectangle[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinearGradientFilling.html) for more details.*