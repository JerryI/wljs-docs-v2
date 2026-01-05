# Show

`Show[graphics, options]` displays graphics with specified options added. `Show[g1, g2, ...]` combines multiple graphics.

## Examples

Combine graphics:

```wolfram
p1 = Plot[Sin[x], {x, 0, 2 Pi}]
p2 = Plot[Cos[x], {x, 0, 2 Pi}, PlotStyle -> Red]

Show[p1, p2]

(* Add options *)
Show[p1, PlotRange -> {-2, 2}, AxesLabel -> {"x", "y"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Show.html) for more details.*