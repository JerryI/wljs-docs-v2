# MemoryConstrained

`MemoryConstrained[expr, b]` evaluates expr, stopping if more than b bytes of memory are requested. `MemoryConstrained[expr, b, failexpr]` returns failexpr if the constraint is exceeded.

## Examples

Limit memory usage:

```wolfram
MemoryConstrained[Range[10^8], 10^6]
(* $Aborted - requires too much memory *)
```

Provide fallback value:

```wolfram
MemoryConstrained[Range[10^8], 10^6, "Too much memory"]
(* "Too much memory" *)
```

Successful within limits:

```wolfram
MemoryConstrained[Range[100], 10^6]
(* {1, 2, ..., 100} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MemoryConstrained.html) for more details.*