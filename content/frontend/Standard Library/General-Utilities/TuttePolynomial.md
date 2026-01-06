---
title: TuttePolynomial
---

`TuttePolynomial[g, {x, y}]` gives the Tutte polynomial of the graph g.

- `TuttePolynomial[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
TuttePolynomial[CompleteGraph[4], {x, y}]
```

```wolfram
TuttePolynomial[CycleGraph[5], {x, y}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TuttePolynomial.html) for more details.*