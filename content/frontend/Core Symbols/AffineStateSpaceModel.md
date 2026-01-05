# AffineStateSpaceModel

```
AffineStateSpaceModel[{a,b,c,d},x] represents the affine state-space model x'(t)a(x(t))+b(x(t)).u(t), y(t)=c(x(t))+d(x(t)).u(t).

AffineStateSpaceModel[sys] gives an affine state-space model corresponding to the system model sys.

AffineStateSpaceModel[eqns,{{x1,x10},…},{{u1,u10},…},{g1,…},t] gives the affine state-space model obtained by Taylor input linearization about the dependent variable xi at xi0 and input uj at uj0 of the differential equations eqns with outputs gi and independent variable t.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*