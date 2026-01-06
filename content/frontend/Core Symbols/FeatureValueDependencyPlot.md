# FeatureValueDependencyPlot

`FeatureValueDependencyPlot[model,data]` plots the dependency of the result of model on the value of a particular feature in data.

- `FeatureValueDependencyPlot[model]` estimates the feature value dependency using synthetic data.
- `FeatureValueDependencyPlot[model->fname,…]` plots only the dependency on the specified feature fname.
- `FeatureValueDependencyPlot[model->fname->class,…]` plots only the dependency on the classification class.

## Examples

```wolfram
(* Visualize feature dependencies *)
classifier = Classify[trainingData];
FeatureValueDependencyPlot[classifier, testData]

(* Focus on a specific feature *)
FeatureValueDependencyPlot[classifier -> "age", testData]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeatureValueDependencyPlot.html) for more details.*