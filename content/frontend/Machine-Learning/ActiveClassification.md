---
title: ActiveClassification
---

`ActiveClassification[f, {conf1, conf2, ...}]` gives an object representing the result of active classification obtained by using the function f to determine classes for the example configurations confi.

`ActiveClassification[f, reg]` generates configurations within the region specified by reg.

`ActiveClassification[f, sampler]` generates configurations by applying the function sampler.

## Examples

Perform active classification with a labeling function:

```wolfram
classifier = ActiveClassification[
  If[#[[1]] + #[[2]] > 1, "A", "B"] &,
  Rectangle[]
]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ActiveClassification.html) for more details.