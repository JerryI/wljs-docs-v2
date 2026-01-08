---
title: VectorQ
---

`VectorQ[expr]` gives `True` if expr is a list with no nested lists (a flat vector).

`VectorQ[expr, test]` gives `True` only if test yields `True` for each element.

## Examples

Test for vectors:

```wolfram
VectorQ[{1, 2, 3}]
(* True *)
```

Nested lists are not vectors:

```wolfram
VectorQ[{{1, 2}, {3, 4}}]
(* False *)
```

Test for numeric vectors:

```wolfram
VectorQ[{1, 2, 3}, NumericQ]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorQ.html) for more details.