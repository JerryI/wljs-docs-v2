---
title: KleinInvariantJ
---

`KleinInvariantJ[τ]` gives the Klein invariant modular elliptic function J(τ).

## Examples

Evaluate at a complex value:

```wolfram
KleinInvariantJ[I] // N
(* 1. *)
```

Plot the real part:

```wolfram
Plot3D[Re[KleinInvariantJ[x + I y]], {x, -1, 1}, {y, 0.5, 2}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KleinInvariantJ.html) for more details.