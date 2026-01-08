---
title: KaiserWindow
---

`KaiserWindow[x]` represents a Kaiser window function of x.

- `KaiserWindow[x, α]` uses the parameter α.

## Examples

Default Kaiser window:

```wolfram
Plot[KaiserWindow[x], {x, -0.5, 0.5}]
```

With parameter:

```wolfram
Plot[KaiserWindow[x, 10], {x, -0.5, 0.5}]
```

Apply as window function:

```wolfram
data = Table[Sin[2 Pi 5 t], {t, 0, 1, 0.01}];
ListLinePlot[data KaiserWindow[Range[-50, 50]/100, 5]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KaiserWindow.html) for more details.