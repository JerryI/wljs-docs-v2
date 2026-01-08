---
title: GeometricStep
---

`GeometricStep[{hyp1, hyp2, …}]` gives a symbolic representation of a step in the definition of a geometric scene, in which the hypotheses `hypi` are introduced.

- `GeometricStep[hyps, label]` labels the step with `label` when displaying an instance of the geometric scene.

## Examples

```wolfram
GeometricStep[{Triangle[{a, b, c}]}]
```

```wolfram
GeometricStep[{GeometricAssertion[Triangle[{a, b, c}], "Isosceles"]}, "Step 2"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeometricStep.html) for more details.