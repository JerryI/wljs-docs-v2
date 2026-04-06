---
title: EllipticFilterModel
---

`EllipticFilterModel[n]` designs a lowpass elliptic filter of order n.

`EllipticFilterModel[{n, ωc}]` uses the cutoff frequency ωc.

`EllipticFilterModel[{"type", spec}]` designs an elliptic filter of the specified type "type", using the spec.

`EllipticFilterModel[{"type", spec}, var]` expresses the model in terms of the variable var.

## Examples

Design a 5th order elliptic filter:

```wolfram
EllipticFilterModel[5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EllipticFilterModel.html) for more details.