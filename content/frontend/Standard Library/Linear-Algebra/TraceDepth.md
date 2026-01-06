---
title: TraceDepth
---

`TraceDepth` is an option for `Trace` and related functions which specifies the maximum nesting of evaluation chains that are to be included.

## Examples

```wolfram
Trace[f[g[h[x]]], TraceDepth -> 1]
```

```wolfram
Trace[1 + 2 + 3, TraceDepth -> 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TraceDepth.html) for more details.*