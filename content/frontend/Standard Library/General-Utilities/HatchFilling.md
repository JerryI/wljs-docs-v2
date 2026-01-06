---
title: HatchFilling
---

`HatchFilling[]` is a two-dimensional graphics directive that specifies that faces of polygons and other filled graphics objects are to be drawn using closely spaced parallel lines.

`HatchFilling["name"]` uses the specified line hatching "name".

`HatchFilling[θ]` draws parallel lines with an angle θ.

`HatchFilling[θ, r]` draws parallel lines with absolute thickness r.

`HatchFilling[θ, r, d]` draws parallel lines with gaps of absolute thickness d.

## Examples

Fill a rectangle with hatching:

```wolfram
Graphics[{HatchFilling[], Rectangle[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HatchFilling.html) for more details.*