---
title: AtomQ
---

`AtomQ[expr]` yields `True` if expr is an atomic expression that cannot be divided into subexpressions.

## Examples

Numbers are atoms:

```wolfram
AtomQ[5]
(* True *)
```

Symbols are atoms:

```wolfram
AtomQ[x]
(* True *)
```

Lists are not atoms:

```wolfram
AtomQ[{1, 2, 3}]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AtomQ.html) for more details.