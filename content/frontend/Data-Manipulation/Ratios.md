---
title: Ratios
---

`Ratios[list]` gives the successive ratios between consecutive elements: `{e2/e1, e3/e2, ...}`.

## Examples

Compute ratios:

```wolfram
Ratios[{1, 2, 4, 8, 16}]
(* {2, 2, 2, 2} *)

Ratios[{1, 2, 6, 24, 120}]
(* {2, 3, 4, 5} *)

(* Detecting geometric sequences *)
Ratios[{3, 9, 27, 81}]
(* {3, 3, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Ratios.html) for more details.*