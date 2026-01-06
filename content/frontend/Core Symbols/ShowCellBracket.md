# ShowCellBracket

`ShowCellBracket` is an option for `Cell` that specifies whether to display the bracket that indicates the extent of the cell.

## Examples

Create a cell without showing the bracket:
```wolfram
Cell["Some text", ShowCellBracket -> False]
```

Hide cell brackets in a notebook:
```wolfram
SetOptions[EvaluationNotebook[], ShowCellBracket -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShowCellBracket.html) for more details.*