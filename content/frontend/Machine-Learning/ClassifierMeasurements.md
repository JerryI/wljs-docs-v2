---
title: ClassifierMeasurements
---

`ClassifierMeasurements[classifier, testset, prop]` gives measurements associated with property prop when classifier is evaluated on testset.

`ClassifierMeasurements[classifier, testset]` yields a measurement report that can be applied to any property.

## Examples

Measure accuracy of a classifier:

```wolfram
cf = Classify[{1 -> "a", 2 -> "b", 3 -> "a"}];
ClassifierMeasurements[cf, {1.5 -> "a", 2.5 -> "b"}, "Accuracy"]
(* 1. *)
```

Get a confusion matrix:

```wolfram
ClassifierMeasurements[cf, testdata, "ConfusionMatrix"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClassifierMeasurements.html) for more details.