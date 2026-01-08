---
title: Underflow
---

`Underflow[]` represents a number too small to represent explicitly on your computer system.

## Examples

Cause an underflow:

```wolfram
10.^-1000
(* Underflow[] *)
```

Check for underflow:

```wolfram
MatchQ[Underflow[], Underflow[]]
(* True *)
```

Handle underflow in computations:

```wolfram
Quiet[Check[10.^-500, "Underflow detected"]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Underflow.html) for more details.