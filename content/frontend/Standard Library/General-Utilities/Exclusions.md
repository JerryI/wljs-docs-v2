---
title: Exclusions
---

`Exclusions` is an option that specifies where to exclude in regions used by functions like `Plot`, `Plot3D`, and `NIntegrate`.

## Examples

Plot with automatic exclusions:

```wolfram
Plot[Tan[x], {x, -2 Pi, 2 Pi}, Exclusions -> Automatic]
```

Turn off exclusions:

```wolfram
Plot[1/x, {x, -1, 1}, Exclusions -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Exclusions.html) for more details.*