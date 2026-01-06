---
title: PreserveImageOptions
---

`PreserveImageOptions` is an option to graphics and related functions that specifies whether image size and certain other options should be preserved from the previous version of a graphic if the graphic is replaced by a new one in output.

## Examples

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, PreserveImageOptions -> True]
```

```wolfram
Graphics[Circle[], PreserveImageOptions -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PreserveImageOptions.html) for more details.*