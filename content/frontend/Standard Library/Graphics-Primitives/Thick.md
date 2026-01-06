---
title: Thick
---

`Thick` is a graphics directive that specifies that lines which follow should be drawn thick.

## Examples

Draw thick lines:

```wolfram
Graphics[{Thick, Line[{{0, 0}, {1, 1}}]}]
```

Compare with default:

```wolfram
Graphics[{
  Line[{{0, 0}, {1, 0}}],
  Thick, Line[{{0, 0.5}, {1, 0.5}}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Thick.html) for more details.*