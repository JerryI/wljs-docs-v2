---
title: Offset
---

`Offset[{dx, dy}, position]` gives the position of a graphical object obtained by starting at the specified position and then moving by absolute offset {dx, dy}.

## Examples

Place text with offset:

```wolfram
Graphics[{Point[{0, 0}], Text["Label", Offset[{10, 5}, {0, 0}]]}]
```

Using in Inset:

```wolfram
Graphics[{Circle[], Inset["Center", Offset[{0, 20}, {0, 0}]]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Offset.html) for more details.*