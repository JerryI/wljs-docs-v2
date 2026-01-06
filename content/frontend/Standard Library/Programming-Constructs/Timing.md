---
title: Timing
---

`Timing[expr]` evaluates expr, and returns a list of the CPU time in seconds used, together with the result obtained.

## Examples

Measure the time for a computation:

```wolfram
Timing[Sum[i^2, {i, 10^6}]]
(* {0.032, 333333833333500000} *)
```

Time a sorting operation:

```wolfram
Timing[Sort[RandomReal[1, 100000]]]
(* {0.015, {...}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Timing.html) for more details.*