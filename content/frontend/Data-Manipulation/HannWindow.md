---
title: HannWindow
---

`HannWindow[x]` represents a Hann window function of x.

- `HannWindow[x, α]` uses the parameter α.

## Examples

Evaluate window:

```wolfram
HannWindow[0.3]
```

Plot the window:

```wolfram
Plot[HannWindow[x], {x, -0.5, 0.5}]
```

In signal processing:

```wolfram
LowpassFilter[data, 0.1, HannWindow]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HannWindow.html) for more details.*