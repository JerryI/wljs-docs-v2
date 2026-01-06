---
title: StateSpaceTransform
---

`StateSpaceTransform[sys,{p,q}]` transforms the state-space model sys using the matrices p and q.

`StateSpaceTransform[sys,{{x1->p1[z],…},{z1->q1[x],…}}]` transforms using the variable transformations {x1->p1[z],…} and {z1->q1[x],…}.

## Examples

Transform a state-space model:

```wolfram
sys = StateSpaceModel[{{1, 2}, {3, 4}}, {{1}, {0}}, {{1, 0}}, {{0}}];
StateSpaceTransform[sys, {IdentityMatrix[2], IdentityMatrix[2]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StateSpaceTransform.html) for more details.*