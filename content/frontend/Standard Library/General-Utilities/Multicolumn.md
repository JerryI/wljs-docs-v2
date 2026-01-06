---
title: Multicolumn
---

`Multicolumn[list, cols]` is an object that formats with the elements of list arranged in a grid with the indicated number of columns.

- `Multicolumn[list, {rows, Automatic}]` formats as a grid with the indicated number of rows.
- `Multicolumn[list, {rows, cols}]` formats as a grid with the indicated number of rows and columns.
- `Multicolumn[list]` formats with the elements of list in a roughly square arrangement.

## Examples

```wolfram
Multicolumn[Range[10], 3]
```

```wolfram
Multicolumn[CharacterRange["a", "z"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Multicolumn.html) for more details.*