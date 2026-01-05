# StateSpaceModel

```
StateSpaceModel[{a,b,c,d}] represents the standard state-space model with state matrix a, input matrix b, output matrix c, and transmission matrix d.

StateSpaceModel[{a,b,c,d,e}] represents a descriptor state-space model with descriptor matrix e.

StateSpaceModel[sys] gives a state-space model corresponding to the systems model sys.

StateSpaceModel[eqns,{{x1,x10},…},{{u1,u10},…},{g1,…},τ] gives the state-space model obtained by Taylor linearization about the point (xi0,ui0) of the differential or difference equations eqns with outputs gi and independent variable τ.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*