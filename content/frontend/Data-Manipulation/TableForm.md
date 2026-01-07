---
title: TableForm
---

`TableForm[list]` displays a list as a table with elements in rectangular cells.

## Examples

Display data as a table:

```wolfram
TableForm[{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}]

(* With headers *)
TableForm[
  {{"Alice", 30}, {"Bob", 25}},
  TableHeadings -> {None, {"Name", "Age"}}
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TableForm.html) for more details.*