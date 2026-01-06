---
title: FrameTicks
---

`FrameTicks` is an option for 2D graphics functions that specifies tick marks for the edges of a frame.

## Examples

Disable frame ticks:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Frame -> True, FrameTicks -> None]
```

Specify custom frame ticks:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Frame -> True, FrameTicks -> {{Automatic, None}, {Automatic, None}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FrameTicks.html) for more details.*