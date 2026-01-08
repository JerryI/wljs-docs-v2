---
title: EndPackage
---

`EndPackage[]` restores `$Context` and `$ContextPath` to their values before the preceding `BeginPackage`, and prepends the current context to `$ContextPath`.

## Examples

Complete a package definition:

```wolfram
BeginPackage["MyPackage`"];
(* export public symbols *)
Begin["`Private`"];
(* private implementations *)
End[];
EndPackage[]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EndPackage.html) for more details.