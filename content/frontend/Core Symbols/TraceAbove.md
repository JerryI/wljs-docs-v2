# TraceAbove

`TraceAbove` is an option for `Trace` and related functions which specifies whether to include evaluation chains which contain the evaluation chain containing the pattern form sought.

## Examples

Trace with context above:

```wolfram
Trace[{1, 2} + {3, 4}, Plus, TraceAbove -> True]
```

Default behavior (without above):

```wolfram
Trace[{1, 2} + {3, 4}, Plus, TraceAbove -> False]
```

Include enclosing expressions:

```wolfram
Trace[Simplify[(x + 1)^2], Power, TraceAbove -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TraceAbove.html) for more details.*