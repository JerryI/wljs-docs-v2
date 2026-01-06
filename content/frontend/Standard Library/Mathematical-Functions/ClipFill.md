---
title: ClipFill
---

`ClipFill` is an option for plotting functions that specifies what should be shown where curves or surfaces would extend beyond the plot range.

## Examples

Use different fills for clipped regions:

```wolfram
Plot[Tan[x], {x, 0, 2 Pi}, ClipFill -> Automatic]
```

Fill clipped regions with None:

```wolfram
Plot[Tan[x], {x, 0, 2 Pi}, ClipFill -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClipFill.html) for more details.*