---
title: Trace
---

`Trace[expr]` generates a list of all expressions used in the evaluation of expr. `Trace[expr, form]` includes only expressions matching form.

## Examples

Trace an evaluation:

```wolfram
Trace[2 + 3]
(* {2 + 3, 5} *)
```

Trace specific operations:

```wolfram
Trace[Factorial[5], Factorial]
(* {{Factorial[5], 5 Factorial[4], ...}} *)
```

Trace a function call:

```wolfram
f[x_] := x^2 + 1;
Trace[f[3]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Trace.html) for more details.