---
title: IsomorphicGraphQ
---

`IsomorphicGraphQ[g1, g2]` yields `True` if graphs g1 and g2 are isomorphic, and `False` otherwise.

## Examples

Check isomorphism:

```wolfram
IsomorphicGraphQ[CycleGraph[5], CycleGraph[5]]
(* True *)
```

Non-isomorphic graphs:

```wolfram
IsomorphicGraphQ[CycleGraph[4], PathGraph[Range[4]]]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IsomorphicGraphQ.html) for more details.*