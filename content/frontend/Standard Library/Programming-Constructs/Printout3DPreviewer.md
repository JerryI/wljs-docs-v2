---
title: Printout3DPreviewer
---

`Printout3DPreviewer` is an option for Printout3D that specifies a previewer for generating outputs to print.

## Examples

Use a specific previewer:

```wolfram
Printout3D[Graphics3D[Sphere[]], Printout3DPreviewer -> "MakerBot"]
```

Disable the previewer:

```wolfram
Printout3D[model, Printout3DPreviewer -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Printout3DPreviewer.html) for more details.*