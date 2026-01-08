---
title: CoprimeQ
---

`CoprimeQ[n1, n2]` yields True if n1 and n2 are relatively prime, and yields False otherwise.

`CoprimeQ[n1, n2, ...]` yields True if all pairs of the ni are relatively prime, and yields False otherwise.

## Examples

Check if two numbers are coprime:

```wolfram
CoprimeQ[8, 15]
(* True *)
```

Numbers with common factor:

```wolfram
CoprimeQ[12, 18]
(* False *)
```

Multiple numbers:

```wolfram
CoprimeQ[3, 5, 7]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoprimeQ.html) for more details.*