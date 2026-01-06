---
title: ManagedLibraryExpressionQ
---

`ManagedLibraryExpressionQ[expr]` returns `True` if expr is a managed library expression and `False` otherwise.

`ManagedLibraryExpressionQ[expr,mname]` only returns `True` if expr is associated with the registered manager having name mname.

## Examples

Test if an expression is a managed library expression:

```wolfram
ManagedLibraryExpressionQ[someExpr]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ManagedLibraryExpressionQ.html) for more details.*