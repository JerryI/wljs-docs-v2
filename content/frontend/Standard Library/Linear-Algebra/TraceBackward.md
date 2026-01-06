---
title: TraceBackward
---

`TraceBackward` is an option for `Trace` and related functions that specifies whether to include preceding expressions on the evaluation chain that contains the pattern form sought.

## Examples

```wolfram
Trace[1 + 2 + 3, _Plus, TraceBackward -> True]
```

```wolfram
Trace[f[g[x]], g, TraceBackward -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TraceBackward.html) for more details.*