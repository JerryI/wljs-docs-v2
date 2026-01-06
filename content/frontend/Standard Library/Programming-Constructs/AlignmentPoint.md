---
title: AlignmentPoint
---

`AlignmentPoint` is an option which specifies how objects should by default be aligned when they appear in `Inset`.

## Examples

Set the alignment point for an inset:

```wolfram
Graphics[{
  Circle[],
  Inset[Style["Text", 20], {0, 0}, AlignmentPoint -> Center]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AlignmentPoint.html) for more details.*