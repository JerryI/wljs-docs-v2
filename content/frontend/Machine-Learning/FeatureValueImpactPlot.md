---
title: FeatureValueImpactPlot
---

`FeatureValueImpactPlot[model,data]` plots the impact of the value of a given feature in data on the result of model.

- `FeatureValueImpactPlot[model]` estimates the feature value impact using synthetic data.
- `FeatureValueImpactPlot[model->fname,…]` plots only the impact of the specified feature fname.
- `FeatureValueImpactPlot[model->fname->class,…]` plots only the impact on the classification class.

## Examples

```wolfram
(* Visualize feature impact *)
classifier = Classify[trainingData];
FeatureValueImpactPlot[classifier, testData]

(* Impact of a specific feature *)
FeatureValueImpactPlot[classifier -> "income", testData]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeatureValueImpactPlot.html) for more details.