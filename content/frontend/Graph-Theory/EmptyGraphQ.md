---
title: EmptyGraphQ
---

`EmptyGraphQ[g]` yields `True` if g is an empty graph and `False` otherwise.

## Examples

Check if graph is empty:

```wolfram
EmptyGraphQ[Graph[{}]]
(* True *)
```

Non-empty graph:

```wolfram
EmptyGraphQ[Graph[{1 -> 2}]]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EmptyGraphQ.html) for more details.*