---
title: StateTransformationLinearize
---

`StateTransformationLinearize[asys]` linearizes the AffineStateSpaceModel asys by state transformation.

- `StateTransformationLinearize[asys, {z, lform}]` specifies the new states z and form of linearization lform.
- `StateTransformationLinearize[asys, ..., "prop"]` computes the property "prop".

## Examples

Linearize an affine state-space model:

```wolfram
asys = AffineStateSpaceModel[{x'[t] == x[t]^2 + u[t]}, {{x[t], 1}}, {u[t]}, {x[t]}, t];
StateTransformationLinearize[asys]
```

Get the transformation function:

```wolfram
StateTransformationLinearize[asys, "StateTransformation"]
```

Specify the linearization form:

```wolfram
StateTransformationLinearize[asys, {z, "Feedback"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StateTransformationLinearize.html) for more details.*