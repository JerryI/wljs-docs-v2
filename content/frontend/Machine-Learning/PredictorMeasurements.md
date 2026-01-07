---
title: PredictorMeasurements
---

`PredictorMeasurements[predictor, testset, prop]` gives measurements associated with the property *prop* when *predictor* is evaluated on *testset*.

- `PredictorMeasurements[predictor, testset]` yields a measurement report that can be applied to any property.
- `PredictorMeasurements[data, ...]` use predictions *data* instead of a predictor.
- `PredictorMeasurements[..., {prop1, prop2, ...}]` gives properties *prop1*, *prop2*, etc.

## Examples

```wolfram
PredictorMeasurements[trainedPredictor, testData, "RSquared"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PredictorMeasurements.html) for more details.*