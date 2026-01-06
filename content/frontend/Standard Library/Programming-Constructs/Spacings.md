---
title: Spacings
---

`Spacings` is an option to `Grid` and related constructs that specifies the spacings to leave between successive objects.

The value can be a single number for uniform spacing, or `{horizontal, vertical}` for different spacing in each direction.

## Examples

```wolfram
Grid[{{a, b}, {c, d}}, Spacings -> 2]
```

```wolfram
Grid[{{1, 2, 3}, {4, 5, 6}}, Spacings -> {3, 1}]
```

```wolfram
Grid[Table[i + j, {i, 3}, {j, 3}], Spacings -> {1, 2}, Frame -> All]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Spacings.html) for more details.*