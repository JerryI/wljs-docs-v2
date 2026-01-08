---
title: AsymptoticRSolveValue
---

`AsymptoticRSolveValue[eqn,f,x->∞]` computes an asymptotic approximation to the difference equation eqn for f[x] near ∞.

`AsymptoticRSolveValue[{eqn1,eqn2,…},{f1,f2,…},x-> ∞]` computes an asymptotic approximation to a system of difference equations.

`AsymptoticRSolveValue[eqn,f,x,ϵ->ϵ0]` computes an asymptotic approximation of f[x,ϵ] for the parameter ϵ centered at ϵ0.

`AsymptoticRSolveValue[eqn,f,…,{ξ,ξ0,n}]` computes the asymptotic approximation to order n.

## Examples

Find asymptotic solution to a recurrence:

```wolfram
AsymptoticRSolveValue[f[x + 1] == 2 f[x] + 1, f, x -> Infinity]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticRSolveValue.html) for more details.