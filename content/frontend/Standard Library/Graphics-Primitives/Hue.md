---
title: Hue
---

`Hue[h]` represents a color with hue `h` (0 to 1). `Hue[h, s, b]` specifies hue, saturation, and brightness.

## Examples

Use HSB colors in graphics:

```wolfram
(* Rainbow of colors *)
Graphics[Table[
  {Hue[h], Disk[{10 h, 0}, 0.4]},
  {h, 0, 1, 0.1}
]]

(* Full HSB specification *)
Hue[0.6, 0.8, 1.0]  (* bright saturated blue *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Hue.html) for more details.*