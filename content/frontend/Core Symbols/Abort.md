# Abort

`Abort[]` generates an interrupt to abort a computation.

## Example

Abort a loop early:

```wolfram
Do[
  If[i > 5, Abort[]];
  Print[i],
  {i, 10}
]
(* Prints 1 through 5, then aborts *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Abort.html) for more details.*