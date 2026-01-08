---
title: RepeatedTiming
---

`RepeatedTiming[expr]` evaluates expr repeatedly and returns a list of the average time in seconds used, together with the result obtained.

`RepeatedTiming[expr, t]` does repeated evaluation for at least t seconds.

## Examples

```wolfram
RepeatedTiming[Sum[i, {i, 10000}]]
(* {0.00012, 50005000} *)
```

```wolfram
RepeatedTiming[Prime[10000], 1]
(* {2.3*10^-6, 104729} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RepeatedTiming.html) for more details.