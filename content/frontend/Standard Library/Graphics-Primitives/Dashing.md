---
title: Dashing
---

`Dashing[{r1, r2, ...}]` specifies that lines are drawn dashed with segment lengths `r1`, `r2`, ... repeated cyclically.

## Examples

Draw dashed lines:

```wolfram
Graphics[{
  Dashing[{0.02, 0.02}], Line[{{0, 0}, {1, 0}}],
  Dashing[{0.05, 0.01}], Line[{{0, 0.2}, {1, 0.2}}],
  Dashing[{0.03, 0.01, 0.01, 0.01}], Line[{{0, 0.4}, {1, 0.4}}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Dashing.html) for more details.*