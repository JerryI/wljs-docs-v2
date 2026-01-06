---
title: RightComposition
---

`RightComposition[f, g, h]` composes functions left to right: first `f`, then `g`, then `h`. Opposite order from `Composition`.

## Examples

Compose functions left to right:

```wolfram
(* h[g[f[x]]] *)
RightComposition[Abs, Sqrt][-4]
(* 2 *)

(* Using /* operator *)
(Abs /* Sqrt /* N)[-2]
(* 1.41421 *)

(* Pipeline style *)
data /* Sort /* First
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RightComposition.html) for more details.*