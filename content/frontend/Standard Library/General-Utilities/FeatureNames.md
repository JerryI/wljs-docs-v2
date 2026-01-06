---
title: FeatureNames
---

`FeatureNames` is an option for machine learning functions such as Classify or Predict that specifies names to use for elements of input data given.

## Examples

Specify feature names in a classifier:

```wolfram
Classify[data -> labels, FeatureNames -> {"height", "weight"}]
```

Use with Predict:

```wolfram
Predict[trainingData, FeatureNames -> {"x1", "x2", "x3"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeatureNames.html) for more details.*