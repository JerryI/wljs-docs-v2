---
title: Directive
---

`Directive[g1, g2, ...]` represents a single graphics directive composed of the directives g1, g2, ....

## Examples

Combine multiple directives:

```wolfram
Graphics[{Directive[Red, Thick, Dashed], Line[{{0, 0}, {1, 1}}]}]
```

Use in plots:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, 
  PlotStyle -> Directive[Blue, Thick]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Directive.html) for more details.*