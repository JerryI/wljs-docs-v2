---
title: StateSpaceModel
---

`StateSpaceModel[{a, b, c, d}]` represents the standard state-space model with state matrix a, input matrix b, output matrix c, and transmission matrix d.

`StateSpaceModel[{a, b, c, d, e}]` represents a descriptor state-space model with descriptor matrix e.

`StateSpaceModel[sys]` gives a state-space model corresponding to the systems model sys.

## Examples

Create a simple state-space model:

```wolfram
StateSpaceModel[{{{-1}}, {{1}}, {{1}}, {{0}}}]
```

Convert a transfer function to state-space:

```wolfram
StateSpaceModel[TransferFunctionModel[1/(s + 1), s]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StateSpaceModel.html) for more details.*