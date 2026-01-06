---
title: AssociationQ
---

`AssociationQ[expr]` gives `True` if expr is a valid `Association` object, and `False` otherwise.

## Examples

Test for associations:

```wolfram
AssociationQ[<|"a" -> 1, "b" -> 2|>]
(* True *)
```

```wolfram
AssociationQ[{"a" -> 1}]
(* False *)
```

Lists of rules are not associations:

```wolfram
AssociationQ[{a -> 1, b -> 2}]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AssociationQ.html) for more details.*