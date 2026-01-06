---
title: Display
---

`Display[channel, graphics]` writes graphics or sound to the specified output channel in PostScript format.

`Display[channel, graphics, "format"]` writes graphics or sound in the specified format.

`Display[channel, expr, "format"]` writes boxes, cells, or notebook expressions in the specified format.

## Examples

Display graphics to a file:

```wolfram
Display["output.eps", Plot[Sin[x], {x, 0, 2Pi}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Display.html) for more details.*