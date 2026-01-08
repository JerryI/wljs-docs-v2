---
title: AbsoluteTiming
---

`AbsoluteTiming[expr]` evaluates expr, returning a list of the absolute number of seconds in real time that have elapsed, together with the result obtained.

## Example

Measure execution time:

```wolfram
AbsoluteTiming[Sum[i^2, {i, 10^6}]]
(* {0.05, 333333833333500000} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AbsoluteTiming.html) for more details.