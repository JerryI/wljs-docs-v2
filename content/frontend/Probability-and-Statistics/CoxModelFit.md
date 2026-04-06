---
title: CoxModelFit
---

`CoxModelFit[{e1, ..., en}]` constructs a model of the baseline hazard h0(t) for events times ei.

`CoxModelFit[{{{ξ11, ..., ξ1p}, ..., {ξn1, ..., ξnp}}, {e1, ..., en}}, {f1, ..., fm}, {x1, ..., xp}]` constructs a Cox model of the form h0(t) exp(β1 f1 + ... + βm fm), where the fi depend on the xk.

## Examples

Fit a Cox proportional hazards model:

```wolfram
times = {1, 2, 3, 4, 5};
CoxModelFit[times]
```

With covariates:

```wolfram
data = {{{0.5}, {1.2}, {0.8}}, {1, 2, 3}};
CoxModelFit[data, x, {x}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoxModelFit.html) for more details.