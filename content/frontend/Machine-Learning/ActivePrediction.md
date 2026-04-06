---
title: ActivePrediction
---

`ActivePrediction[f, {conf1, conf2, ...}]` gives an object representing the result of active prediction obtained by using the function f to determine values for the example configurations confi.

`ActivePrediction[f, reg]` generates configurations within the region specified by reg.

`ActivePrediction[f, sampler]` generates configurations by applying the function sampler.

## Examples

Perform active prediction on a region:

```wolfram
predictor = ActivePrediction[Sin[#] &, {0, Pi, 2 Pi}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ActivePrediction.html) for more details.