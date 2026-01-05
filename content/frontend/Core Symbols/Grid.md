# Grid

`Grid[{{expr11, expr12, ...}, {expr21, expr22, ...}, ...}]` arranges expressions in a 2D grid.

## Examples

Create a grid layout:

```wolfram
Grid[{
  {"Name", "Age", "City"},
  {"Alice", 30, "NYC"},
  {"Bob", 25, "LA"}
}, Frame -> All]

(* Styled grid *)
Grid[Table[i*j, {i, 5}, {j, 5}], Frame -> All, Background -> LightBlue]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Grid.html) for more details.*