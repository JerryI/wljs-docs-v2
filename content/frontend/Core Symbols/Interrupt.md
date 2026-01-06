# Interrupt

`Interrupt[]` generates an interrupt, halting the current evaluation.

## Examples

Interrupt execution:

```wolfram
Do[If[i > 5, Interrupt[]]; Print[i], {i, 10}]
```

Use in debugging:

```wolfram
f[x_] := (If[x < 0, Interrupt[]]; Sqrt[x])
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Interrupt.html) for more details.*