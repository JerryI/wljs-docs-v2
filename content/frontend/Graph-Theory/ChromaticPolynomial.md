---
title: ChromaticPolynomial
---

`ChromaticPolynomial[g, k]` gives the chromatic polynomial of the graph g.

`ChromaticPolynomial[{v -> w, ...}, k]` uses rules to specify the graph g.

## Examples

Chromatic polynomial of a complete graph:

```wolfram
ChromaticPolynomial[CompleteGraph[4], k]
(* k (k - 1) (k - 2) (k - 3) *)
```

Chromatic polynomial of a cycle:

```wolfram
ChromaticPolynomial[CycleGraph[5], k]
(* (k - 1)^5 + (k - 1) *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChromaticPolynomial.html) for more details.*