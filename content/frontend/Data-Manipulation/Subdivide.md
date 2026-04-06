---
title: Subdivide
---

`Subdivide[n]` generates the list `{0, 1/n, 2/n, ..., 1}`.

`Subdivide[xmax, n]` subdivides the interval 0 to xmax into n equal parts.

`Subdivide[xmin, xmax, n]` subdivides the interval xmin to xmax.

## Examples

Subdivide unit interval:

```wolfram
Subdivide[4]
(* {0, 1/4, 1/2, 3/4, 1} *)
```

Subdivide a range:

```wolfram
Subdivide[0, 10, 5]
(* {0, 2, 4, 6, 8, 10} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Subdivide.html) for more details.