---
title: ManagedLibraryExpressionID
---

`ManagedLibraryExpressionID[expr]` returns the positive integer ID associated with expr if it is a managed library expression and $Failed otherwise.

`ManagedLibraryExpressionID[expr,mname]` only returns the ID if expr is associated with the registered manager having name mname.

## Examples

Get the ID of a managed library expression:

```wolfram
ManagedLibraryExpressionID[myLibExpr]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ManagedLibraryExpressionID.html) for more details.*