---
title: PredictorInformation
---

`PredictorInformation[predictor]` generates a report giving information on the predictor function predictor.

- `PredictorInformation[predictor, prop]` gives information for predictor associated with property prop.

## Examples

Get information about a predictor:
```wolfram
p = Predict[trainingData];
PredictorInformation[p]
```

Get a specific property:
```wolfram
PredictorInformation[p, "Method"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PredictorInformation.html) for more details.