---
title: SecondOrderConeOptimization
---

`SecondOrderConeOptimization[f, cons, vars]` finds values of variables vars that minimize the linear objective f subject to second-order cone and/or linear constraints cons.

- `SecondOrderConeOptimization[c, {{a1, b1, α1, β1}, ..., {ak, bk, αk, βk}}]` finds a vector x that minimizes c.x subject to the constraints.
- `SecondOrderConeOptimization[c, ..., {dom1, dom2, ...}]` takes xi to be in the domain domi, where domi is `Integers` or `Reals`.
- `SecondOrderConeOptimization[..., "prop"]` specifies what solution property "prop" should be returned.

## Examples

```wolfram
SecondOrderConeOptimization[{1, 0}, {{{{1, 0}}, {0}, {0, 1}, 1}}, {x, y}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SecondOrderConeOptimization.html) for more details.