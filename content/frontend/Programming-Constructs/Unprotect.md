---
title: Unprotect
---

`Unprotect[s1, s2, ...]` removes the attribute `Protected` from symbols, allowing modification of their definitions.

## Examples

Unprotect to modify a built-in:

```wolfram
Unprotect[Plus]
(* Now Plus can be modified *)

Protect[Plus]
(* Restore protection *)
```

Unprotect custom symbol:

```wolfram
Unprotect[myFunc]
myFunc[x_] := x^3
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Unprotect.html) for more details.