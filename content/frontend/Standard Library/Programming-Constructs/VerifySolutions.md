# VerifySolutions

`VerifySolutions` is an option to Solve and related functions that controls whether to verify solutions.

## Examples

Solve with verification enabled:

```wolfram
Solve[x^2 == 4, x, VerifySolutions -> True]
(* {{x -> -2}, {x -> 2}} *)
```

Disable verification for faster solving:

```wolfram
Solve[x^2 == 4, x, VerifySolutions -> False]
(* {{x -> -2}, {x -> 2}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VerifySolutions.html) for more details.*