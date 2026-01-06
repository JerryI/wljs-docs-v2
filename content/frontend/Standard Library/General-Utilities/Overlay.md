# Overlay

`Overlay[{expr1, expr2, ...}]` displays as an overlay of all the expri.

- `Overlay[{expr1, expr2, ...}, {i, j, ...}]` displays as an overlay of expri, exprj, ….
- `Overlay[{expr1, expr2, ...}, {i, j, ...}, s]` allows selections to be made and controls to be clicked in exprs.

## Examples

```wolfram
Overlay[{Graphics[Circle[]], Graphics[{Red, Point[{0, 0}]}]}]
```

```wolfram
Overlay[{"Background", Style["Foreground", Red]}, {1, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Overlay.html) for more details.*