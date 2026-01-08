---
title: MemberQ
---

`MemberQ[list, form]` returns `True` if an element of list matches form, and `False` otherwise.

## Examples

Check membership:

```wolfram
MemberQ[{a, b, c}, b]
(* True *)

MemberQ[{a, b, c}, d]
(* False *)
```

With patterns:

```wolfram
MemberQ[{1, 2, 3}, _Integer]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MemberQ.html) for more details.