---
title: RootIntervals
---

`RootIntervals[{poly1, poly2, ...}]` gives a list of isolating intervals for the real roots of any of the polyi, together with a list of which polynomials actually have each successive root.

- `RootIntervals[poly]` gives isolating intervals for real roots of a single polynomial.
- `RootIntervals[polys, Complexes]` gives bounding rectangles for complex roots.

## Examples

```wolfram
RootIntervals[x^2 - 2]
```

```wolfram
RootIntervals[{x^2 - 2, x^2 - 3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RootIntervals.html) for more details.