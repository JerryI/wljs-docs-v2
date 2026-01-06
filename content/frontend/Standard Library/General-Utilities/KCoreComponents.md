---
title: KCoreComponents
---

`KCoreComponents[g,k]` gives the k-core components of the underlying simple graph of g.

`KCoreComponents[g,k,"In"]` gives the k-core components with vertex in-degrees at least k.

`KCoreComponents[g,k,"Out"]` gives the k-core components with vertex out-degrees at least k.

`KCoreComponents[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
KCoreComponents[Graph[{1 -> 2, 2 -> 3, 3 -> 1}], 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KCoreComponents.html) for more details.*