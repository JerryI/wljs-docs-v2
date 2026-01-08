---
title: PolyLog
---

`PolyLog[n, z]` gives the polylogarithm function Li_n(z).

## Examples

Polylogarithm values:

```wolfram
PolyLog[2, 1]
(* Pi^2/6 *)

PolyLog[2, -1]
(* -Pi^2/12 *)
```

Numerical evaluation:

```wolfram
N[PolyLog[3, 1/2]]
(* 0.537214 *)
```

Dilogarithm (n=2):

```wolfram
PolyLog[2, 1/2] // N
(* 0.582241 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolyLog.html) for more details.