---
title: Protected
---

`Protected` is an attribute that prevents any values associated with a symbol from being modified.

## Examples

Check if a symbol is protected:

```wolfram
MemberQ[Attributes[Plus], Protected]
(* True *)
```

Set Protected attribute:

```wolfram
SetAttributes[myFunc, Protected]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Protected.html) for more details.*