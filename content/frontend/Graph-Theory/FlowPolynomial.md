---
title: FlowPolynomial
---

`FlowPolynomial[g, k]` gives the flow polynomial of the graph g.

- `FlowPolynomial[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

Compute the flow polynomial of a graph:

```wolfram
FlowPolynomial[CycleGraph[4], k]
```

Flow polynomial of a complete graph:

```wolfram
FlowPolynomial[CompleteGraph[4], k]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FlowPolynomial.html) for more details.