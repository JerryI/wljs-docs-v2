---
title: SowVideo
---

`SowVideo[frame]` specifies that frame should be collected by the nearest enclosing `ReapVideo`.

- `SowVideo[frame, n]` repeats frame n times when reaped.

This function is used for procedural video generation.

## Examples

```wolfram
ReapVideo[Do[SowVideo[Graphics[Circle[], ImageSize -> 100]], 10]]
```

```wolfram
ReapVideo[Table[SowVideo[Plot[Sin[x + t], {x, 0, 2 Pi}]], {t, 0, 2 Pi, 0.1}]]
```

```wolfram
SowVideo[frame, 5]  (* Repeat frame 5 times *)
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SowVideo.html) for more details.