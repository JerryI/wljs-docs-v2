# Dividers

`Dividers` is an option for `Grid` and related constructs that specifies where and how to draw divider lines.

## Examples

Add dividers to a grid:

```wolfram
Grid[{{a, b, c}, {d, e, f}}, Dividers -> All]
```

Custom divider lines:

```wolfram
Grid[{{1, 2, 3}, {4, 5, 6}}, 
  Dividers -> {{2 -> Red}, {2 -> Blue}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Dividers.html) for more details.*