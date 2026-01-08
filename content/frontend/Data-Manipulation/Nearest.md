---
title: Nearest
---

`Nearest[{elem1, elem2, ...}, x]` gives the list of elem_i to which x is nearest.

`Nearest[data, x, n]` gives the n nearest elem_i to x.

`Nearest[data]` generates a `NearestFunction[...]` that can be applied repeatedly to different x.

## Examples

Find nearest element:

```wolfram
Nearest[{1, 2, 5, 10}, 4]
(* {5} *)
```

Multiple nearest:

```wolfram
Nearest[{1, 2, 5, 10}, 4, 2]
(* {5, 2} *)
```

With points:

```wolfram
Nearest[{{0, 0}, {1, 0}, {0, 1}}, {0.5, 0.5}]
(* {{1, 0}} or {{0, 1}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Nearest.html) for more details.