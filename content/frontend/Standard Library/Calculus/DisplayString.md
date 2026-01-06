---
title: DisplayString
---

`DisplayString[graphics]` generates a string giving graphics or sound in PostScript format.

`DisplayString[graphics, "format"]` generates a string giving graphics or sound in the specified format.

`DisplayString[expr, "format"]` generates a string giving boxes, cells, or notebook expressions in the specified format.

## Examples

Get PNG representation as a string:

```wolfram
DisplayString[Plot[Sin[x], {x, 0, 2Pi}], "PNG"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DisplayString.html) for more details.*