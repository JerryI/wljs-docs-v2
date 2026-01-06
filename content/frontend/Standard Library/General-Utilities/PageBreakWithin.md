# PageBreakWithin

`PageBreakWithin` is an option for Cell which specifies whether a page break should be allowed within the cell if the notebook that contains the cell is printed.

## Examples

Prevent page breaks within a cell:

```wolfram
Cell["Important content", PageBreakWithin -> False]
```

Allow page breaks within a cell:

```wolfram
Cell["Long content", PageBreakWithin -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PageBreakWithin.html) for more details.*