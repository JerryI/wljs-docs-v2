---
title: EstimatedProcess
---

`EstimatedProcess[data,proc]` estimates the parametric process proc from data.

`EstimatedProcess[data,proc,{{p,p0},{q,q0},…}]` estimates the parameters p, q, … with starting values p0, q0, ….

`EstimatedProcess[data,proc,iproc]` estimates process proc with starting values taken from the instantiated process iproc.

## Examples

Estimate an AR process from data:

```wolfram
data = RandomFunction[ARProcess[{0.5}, 1], {0, 100}];
EstimatedProcess[data, ARProcess[{a}, v]]
(* ARProcess[{0.498...}, 1.02...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EstimatedProcess.html) for more details.*