---
title: DiscreteInputOutputModel
---

`DiscreteInputOutputModel[{g0, g1, ..., gn-1}, u]` represents a discrete-time model with input u and output y=gi(u) at sampling instant i.

`DiscreteInputOutputModel[{g0, g1, ..., gn-1}, u, y]` can be used to specify outputs gi(u, y) that also depend on the output variables y.

## Examples

Create a discrete input-output model:

```wolfram
DiscreteInputOutputModel[{u, 2u}, u]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteInputOutputModel.html) for more details.*