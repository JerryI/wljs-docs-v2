# CumulativeFeatureImpactPlot

`CumulativeFeatureImpactPlot[model,data]` plots the cumulative impact of the value of each feature in data on the result of model.

`CumulativeFeatureImpactPlot[model]` estimates the feature impacts using synthetic data.

`CumulativeFeatureImpactPlot[model->fname,…]` plots only the impact of the specified feature fname.

`CumulativeFeatureImpactPlot[model->fname->class,…]` plots only the impact on the classification class.

## Examples

```wolfram
CumulativeFeatureImpactPlot[classifier, testData]
```

```wolfram
CumulativeFeatureImpactPlot[predictor -> "Age"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CumulativeFeatureImpactPlot.html) for more details.*