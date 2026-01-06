---
title: NonlinearStateSpaceModel
---

`NonlinearStateSpaceModel[{f,g},x,u]` represents the model x'(t)=f(x(t),u(t)), y(t)=g(x(t),u(t)).

`NonlinearStateSpaceModel[sys]` gives a state-space representation corresponding to the systems model sys.

`NonlinearStateSpaceModel[eqns,{{x1,x10},…},{{u1,u10},…},{g1,…},t]` gives the state-space model of the differential equations eqns with dependent variables xi, input variables ui, operating values xi0 and ui0, outputs gi, and independent variable t.

## Examples

Create a simple nonlinear state-space model:

```wolfram
NonlinearStateSpaceModel[{{-x[t]^3 + u[t]}, {x[t]}}, {x[t]}, {u[t]}, t]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NonlinearStateSpaceModel.html) for more details.*