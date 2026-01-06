---
title: Protect
---

`Protect[s1, s2, ...]` sets the attribute `Protected` for the symbols, preventing modification of their definitions.

## Examples

Protect a symbol:

```wolfram
f[x_] := x^2;
Protect[f]
(* f is now protected *)

f[x_] := x^3
(* Set::write: Tag f is Protected *)
```

Check if protected:

```wolfram
MemberQ[Attributes[Plus], Protected]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Protect.html) for more details.*