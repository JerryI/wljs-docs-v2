# ListAnimate

`ListAnimate[{expr1, expr2, ...}]` generates an animation whose frames are the expressions expr_i.

## Examples

Animate a sequence of plots:

```wolfram
ListAnimate[Table[Plot[Sin[n x], {x, 0, 2 Pi}], {n, 1, 5}]]
```

Animate graphics:

```wolfram
ListAnimate[Table[Graphics[{Hue[t], Disk[]}], {t, 0, 1, 0.1}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListAnimate.html) for more details.*