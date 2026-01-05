# Animate

`Animate[expr, {t, tmin, tmax}]` creates an animated version of `expr` with `t` varying from `tmin` to `tmax`.

## Examples

Create animations:

```wolfram
Animate[
  Plot[Sin[x + t], {x, 0, 2 Pi}, PlotRange -> {-1, 1}],
  {t, 0, 2 Pi}
]

(* Animated graphics *)
Animate[
  Graphics[{Red, Disk[{Cos[t], Sin[t]}, 0.1]}, PlotRange -> 1.5],
  {t, 0, 2 Pi}
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Animate.html) for more details.*