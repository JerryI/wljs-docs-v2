---
title: LinearFractionalOptimization
---

`LinearFractionalOptimization[f, cons, vars]` finds values of variables vars that minimize the linear fractional objective f subject to linear constraints cons.

- `LinearFractionalOptimization[{α, β, γ, δ}, {a, b}]` finds a vector x that minimizes the linear fractional function (α.x+β)/(γ.x+δ) subject to the linear inequality constraints a.x+b⪰0.
- `LinearFractionalOptimization[{α, β, γ, δ}, {a, b}, {aeq, beq}]` includes the linear equality constraints aeq.x+beq=0.
- `LinearFractionalOptimization[{α, β, γ, δ}, ..., {dom1, dom2, ...}]` takes xi to be in the domain domi, where domi is Integers or Reals.
- `LinearFractionalOptimization[..., "prop"]` specifies what solution property "prop" should be returned.

## Examples

Minimize a linear fractional function:
```wolfram
LinearFractionalOptimization[(x + 1)/(2 x + 3), {x >= 0, x <= 10}, {x}]
```

With matrix constraints:
```wolfram
LinearFractionalOptimization[{c1, d1, c2, d2}, {A, b}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinearFractionalOptimization.html) for more details.