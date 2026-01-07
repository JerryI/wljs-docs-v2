---
title: WelchWindow
---

`WelchWindow[x]` represents a Welch window function of x.

- `WelchWindow[x, α]` uses the parameter α.

## Examples

Plot the Welch window function:
```wolfram
Plot[WelchWindow[x], {x, -1, 1}]
```

Apply a Welch window to sampled data:
```wolfram
ListLinePlot[WelchWindow[Range[-1, 1, 0.05]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WelchWindow.html) for more details.*