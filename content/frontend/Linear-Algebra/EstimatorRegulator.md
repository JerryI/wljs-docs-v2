---
title: EstimatorRegulator
---

`EstimatorRegulator[sspec, {l, κ}]` gives the output feedback controller with estimator and regulator gains l and κ for the system specification sspec.

`EstimatorRegulator[..., "prop"]` gives the value of the property "prop".

## Examples

Create an estimator-regulator:

```wolfram
EstimatorRegulator[ssm, {estimatorGains, regulatorGains}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EstimatorRegulator.html) for more details.