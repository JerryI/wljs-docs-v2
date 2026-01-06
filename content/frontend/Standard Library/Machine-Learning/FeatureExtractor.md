---
title: FeatureExtractor
---

`FeatureExtractor` is an option for functions such as Classify that specifies how features should be extracted.

## Examples

```wolfram
(* Use a specific feature extractor for classification *)
Classify[trainingData, FeatureExtractor -> "Image"]

(* Use PCA for feature extraction *)
Classify[data, FeatureExtractor -> {"StandardizedVector", "PCA"}]

(* Use a trained FeatureExtractorFunction *)
extractor = FeatureExtraction[examples];
Classify[trainingData, FeatureExtractor -> extractor]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeatureExtractor.html) for more details.*