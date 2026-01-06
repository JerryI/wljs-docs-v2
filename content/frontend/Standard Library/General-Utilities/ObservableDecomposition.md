---
title: ObservableDecomposition
---

`ObservableDecomposition[sys]` yields the observable subsystem of the system sys.

`ObservableDecomposition[sys, {z1, …}]` specifies the new coordinates zi.

## Examples

Decompose a state-space model:

```wolfram
sys = StateSpaceModel[{{0, 1}, {-2, -3}}, {{0}, {1}}, {{1, 0}}, {{0}}];
ObservableDecomposition[sys]
```

Specify new coordinates:

```wolfram
ObservableDecomposition[sys, {z1, z2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ObservableDecomposition.html) for more details.*