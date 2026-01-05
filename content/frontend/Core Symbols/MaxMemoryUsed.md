# MaxMemoryUsed

`MaxMemoryUsed[]` gives the maximum number of bytes used to store all data during the current session. `MaxMemoryUsed[expr]` gives the peak memory during evaluation of expr.

## Examples

Get maximum memory used in session:

```wolfram
MaxMemoryUsed[]
(* 123456789 *)
```

Measure peak memory for an expression:

```wolfram
MaxMemoryUsed[Sort[RandomReal[1, 10^6]]]
(* 8000000 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxMemoryUsed.html) for more details.*