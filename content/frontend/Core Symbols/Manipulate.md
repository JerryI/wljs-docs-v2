# Manipulate

`Manipulate[expr, {u, umin, umax}]` creates an interactive interface with controls to vary `u`. Multiple parameters can be controlled simultaneously.

## Examples

Create interactive visualizations:

```wolfram
Manipulate[
  Plot[Sin[n x], {x, 0, 2 Pi}],
  {n, 1, 5, 1}
]

(* Multiple controls *)
Manipulate[
  Plot[a Sin[b x], {x, 0, 2 Pi}],
  {a, 0.5, 2},
  {b, 1, 5}
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Manipulate.html) for more details.*