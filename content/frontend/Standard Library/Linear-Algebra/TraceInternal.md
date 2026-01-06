---
title: TraceInternal
---

`TraceInternal` is an option for `Trace` and related functions which, if `True` or `False`, specifies whether to trace evaluations of expressions generated internally by Mathematica. The intermediate `Automatic` setting traces a selected set of internal evaluations including Messages and sets or unsets of visible symbols.

## Examples

```wolfram
Trace[1 + 2, TraceInternal -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TraceInternal.html) for more details.*