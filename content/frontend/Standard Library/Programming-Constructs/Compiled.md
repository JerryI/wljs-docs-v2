---
title: Compiled
---

`Compiled` is an option for various numerical and plotting functions which specifies whether the expressions they work with should automatically be compiled.

## Examples

Disable compilation for plotting:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Compiled -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Compiled.html) for more details.*