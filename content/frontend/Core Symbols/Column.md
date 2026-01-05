# Column

`Column[{expr1, expr2, ...}]` arranges expressions in a vertical column. `Column[list, alignment]` specifies horizontal alignment.

## Examples

Arrange items vertically:

```wolfram
Column[{"First", "Second", "Third"}]

(* With alignment and spacing *)
Column[{"Left", "Aligned", "Text"}, Left, 1]

(* Mixed content *)
Column[{Plot[Sin[x], {x, 0, 2 Pi}], "Caption"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Column.html) for more details.*