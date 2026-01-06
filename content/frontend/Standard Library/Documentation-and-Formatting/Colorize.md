---
title: Colorize
---

`Colorize[m]` generates an image from an integer matrix m, using colors for positive integers and black for non-positive integers.

`Colorize[image]` replaces intensity values in image with pseudocolor values.

## Examples

Colorize a label matrix:

```wolfram
Colorize[{{1, 1, 2}, {1, 2, 2}, {3, 3, 3}}]
```

Colorize a grayscale image:

```wolfram
Colorize[Image[RandomReal[1, {50, 50}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Colorize.html) for more details.*