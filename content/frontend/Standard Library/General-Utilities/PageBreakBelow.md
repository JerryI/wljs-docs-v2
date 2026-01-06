---
title: PageBreakBelow
---

`PageBreakBelow` is an option for Cell which specifies whether a page break should be made immediately below the cell if the notebook that contains the cell is printed.

## Examples

Force a page break below a cell:

```wolfram
Cell["Section Title", "Section", PageBreakBelow -> True]
```

Prevent page break below a cell:

```wolfram
Cell["Content", "Text", PageBreakBelow -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PageBreakBelow.html) for more details.*