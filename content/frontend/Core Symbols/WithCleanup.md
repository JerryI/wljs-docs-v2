# WithCleanup

`WithCleanup[expr,cleanup]` evaluates expr, running cleanup before returning the result, even if an abort, throw, etc. was generated during the evaluation of expr.

`WithCleanup[init,expr,cleanup]` evaluates init before evaluating expr, blocking aborts, throws, etc. in both init and cleanup.

## Examples

Ensure cleanup runs even after an abort:

```wolfram
WithCleanup[Print["Working..."], Print["Cleanup!"]]
(* Working... *)
(* Cleanup! *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WithCleanup.html) for more details.*