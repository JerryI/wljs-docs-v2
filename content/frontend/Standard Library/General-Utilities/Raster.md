---
title: Raster
---

`Raster[{{a11, a12, …}, …}]` is a two-dimensional graphics primitive which represents a rectangular array of gray cells.

`Raster[{{{r11, g11, b11}, …}, …}]` represents an array of RGB color cells.

## Examples

Gray scale raster:

```wolfram
Graphics[Raster[Table[i + j, {i, 10}, {j, 10}]]]
```

Color raster:

```wolfram
Graphics[Raster[Table[{i/10, j/10, 0.5}, {i, 10}, {j, 10}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Raster.html) for more details.*