---
title: EulerPhi
---

`EulerPhi[n]` gives the Euler totient function ϕ(n), which counts integers up to n that are coprime to n.

## Examples

Count integers coprime to 12:

```wolfram
EulerPhi[12]
(* 4 *)
```

Totient values for first 10 integers:

```wolfram
Table[EulerPhi[n], {n, 1, 10}]
(* {1, 1, 2, 2, 4, 2, 6, 4, 6, 4} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EulerPhi.html) for more details.