---
title: QuadraticOptimization
---

`QuadraticOptimization[f, cons, vars]` finds values of variables vars that minimize the quadratic objective f subject to linear constraints cons.

- `QuadraticOptimization[{q, c}, {a, b}]` finds a vector x that minimizes the quadratic objective ½x.q.x + c.x subject to the linear inequality constraints a.x + b ≥ 0.
- `QuadraticOptimization[{q, c}, {a, b}, {aeq, beq}]` includes the linear equality constraints aeq.x + beq = 0.
- `QuadraticOptimization[{q, c}, ..., {dom1, dom2, ...}]` takes xi to be in the domain domi, where domi is `Integers` or `Reals`.
- `QuadraticOptimization[..., "prop"]` specifies what solution property "prop" should be returned.

## Examples

```wolfram
QuadraticOptimization[x^2 + y^2, {x + y >= 1}, {x, y}]
```

```wolfram
QuadraticOptimization[(x - 1)^2 + (y - 2)^2, {x >= 0, y >= 0}, {x, y}]
```

```wolfram
QuadraticOptimization[{{{2, 0}, {0, 2}}, {-1, -1}}, {{{1, 1}}, {-1}}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuadraticOptimization.html) for more details.*