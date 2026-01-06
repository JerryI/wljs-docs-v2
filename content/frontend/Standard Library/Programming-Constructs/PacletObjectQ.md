# PacletObjectQ

`PacletObjectQ[expr]` returns True or False depending on whether its argument is a PacletObject expression.

## Examples

Check if an expression is a PacletObject:

```wolfram
PacletObjectQ[PacletObject["MyPaclet"]]
(* True *)
```

```wolfram
PacletObjectQ["NotAPaclet"]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PacletObjectQ.html) for more details.*