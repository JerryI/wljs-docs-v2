---
title: Histogram3D
---

`Histogram3D[{{x1, y1}, {x2, y2}, ...}]` plots a 3D histogram of the values.

## Examples

3D histogram of 2D data:

```wolfram
data = RandomReal[1, {1000, 2}];
Histogram3D[data]
```

With bin specification:

```wolfram
Histogram3D[RandomReal[1, {1000, 2}], 10]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Histogram3D.html) for more details.
