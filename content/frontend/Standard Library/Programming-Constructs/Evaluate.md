# Evaluate

`Evaluate[expr]` causes expr to be evaluated even if it appears inside a function that holds its arguments.

## Examples

Evaluate inside Plot:

```wolfram
Plot[Evaluate[Table[x^n, {n, 1, 3}]], {x, 0, 1}]
```

Force evaluation in Hold:

```wolfram
Hold[Evaluate[1 + 1]]
(* Hold[2] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Evaluate.html) for more details.*