---
title: TableView
---

`TableView[{{expr11, expr12, ...}, {expr21, expr22, ...}, ...}]` displays as a spreadsheet-like table view for editing and viewing exprij.

This creates an interactive table interface for viewing and editing tabular data.

## Examples

```wolfram
TableView[{{1, 2, 3}, {4, 5, 6}}]
```

```wolfram
TableView[RandomReal[1, {5, 4}]]
```

```wolfram
TableView[Table[i + j, {i, 3}, {j, 4}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TableView.html) for more details.