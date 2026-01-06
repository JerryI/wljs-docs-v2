# TraceOff

`TraceOff` is an option for `Trace` and related functions which specifies forms inside which tracing should be switched off.

This option allows you to exclude specific patterns from the trace output.

## Examples

```wolfram
Trace[Integrate[Sin[x], x], TraceOff -> _Integer]
```

```wolfram
Trace[Sum[i^2, {i, 5}], TraceOff -> Plus]
```

```wolfram
Trace[Expand[(a + b)^3], TraceOff -> _Times]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TraceOff.html) for more details.*