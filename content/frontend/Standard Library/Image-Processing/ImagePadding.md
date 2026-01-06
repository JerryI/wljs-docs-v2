---
title: ImagePadding
---

`ImagePadding` is an option for graphics functions that specifies extra padding for thick lines and annotations like tick labels.

## Examples

Uniform padding:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, ImagePadding -> 30]
```

Asymmetric padding:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, ImagePadding -> {{40, 10}, {20, 10}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImagePadding.html) for more details.*