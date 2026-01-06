# Piecewise

`Piecewise[{{val1, cond1}, {val2, cond2}, ...}]` represents a piecewise function with values in regions defined by conditions.

## Examples

Define piecewise functions:

```wolfram
f[x_] := Piecewise[{
  {x^2, x < 0},
  {x, 0 <= x < 1},
  {1, x >= 1}
}]

(* Plot it *)
Plot[Piecewise[{{-x, x < 0}, {x, x >= 0}}], {x, -2, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Piecewise.html) for more details.*