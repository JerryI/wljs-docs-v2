---
title: NumberQ
---

`NumberQ[expr]` gives `True` if expr is an explicit number, and `False` otherwise.

## Examples

Test explicit numbers:

```wolfram
NumberQ[42]
(* True *)
```

```wolfram
NumberQ[3.14]
(* True *)
```

Symbolic constants are not explicit numbers:

```wolfram
NumberQ[Pi]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NumberQ.html) for more details.*