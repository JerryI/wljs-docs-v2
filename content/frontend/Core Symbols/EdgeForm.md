# EdgeForm

`EdgeForm[g]` specifies that edges of polygons and filled objects are drawn using graphics directive `g`.

## Examples

Draw shapes with styled edges:

```wolfram
Graphics[{
  EdgeForm[{Thick, Black}],
  LightBlue, Rectangle[{0, 0}, {1, 1}],
  LightGreen, Disk[{2, 0.5}, 0.5]
}]

(* No edge *)
Graphics[{EdgeForm[], Red, Polygon[{{0, 0}, {1, 0}, {0.5, 1}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeForm.html) for more details.*