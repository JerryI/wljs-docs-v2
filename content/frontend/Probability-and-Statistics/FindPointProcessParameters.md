---
title: FindPointProcessParameters
---

`FindPointProcessParameters[pdata,pproc]` estimates the parameters of the point process pproc from point data pdata.

`FindPointProcessParameters[pdata,pproc,{{p,p0},{q,q0},…}]` estimates the parameters p, q, … with starting values p0, q0, ….

## Examples

```wolfram
(* Estimate parameters of a Poisson process *)
data = RandomPointConfiguration[PoissonPointProcess[5], Rectangle[]];
FindPointProcessParameters[data, PoissonPointProcess[lambda]]

(* With starting values *)
FindPointProcessParameters[data, 
  PoissonPointProcess[lambda], {{lambda, 3}}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindPointProcessParameters.html) for more details.