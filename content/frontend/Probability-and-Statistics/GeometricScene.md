---
title: GeometricScene
---

`GeometricScene[{p1, p2, …}, {hyp1, hyp2, …}]` represents an abstract 2D geometric scene defined by the hypotheses `hypi` in terms of the symbolic points `pi`.

- `GeometricScene[{{p1, p2, …}, {k1, k2, …}}, hyps]` represents a scene whose hypotheses depend on the symbolic scalar quantities `ki`.
- `GeometricScene[{{p1 -> {x1, y1}, …}, {k1 -> v1, …}}, hyps]` represents a specific instance with explicit values for all points and scalar quantities.
- `GeometricScene[params, hyps, {con1, con2, …}]` represents a scene together with some conclusions `coni` about it.
- `GeometricScene[{{{p1 -> {x1, y1}, …}, {k1 -> v1, …}}, …}, hyps]` represents a collection of specific instances of the same scene.
- `GeometricScene[{scene1, scene2, …}]` combines several scene instances into one scene object.

## Examples

```wolfram
GeometricScene[{a, b, c}, {Triangle[{a, b, c}], GeometricAssertion[Triangle[{a, b, c}], "Equilateral"]}]
```

```wolfram
RandomInstance[GeometricScene[{a, b, c, d}, {Quadrilateral[{a, b, c, d}]}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeometricScene.html) for more details.*