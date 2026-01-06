# TraceAction

`TraceAction` is an option for `TracePrint` and `TraceDialog` that specifies the function to be applied to each expression they trace.

## Examples

```wolfram
TracePrint[1 + 2, TraceAction -> Print]
```

```wolfram
TraceDialog[Factorial[5], TraceAction -> (Sow[#] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TraceAction.html) for more details.*