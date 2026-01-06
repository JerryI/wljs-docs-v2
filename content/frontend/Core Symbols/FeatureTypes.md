# FeatureTypes

`FeatureTypes` is an option for machine learning functions such as Classify or Predict that specifies what feature types to assume for elements of input data given.

## Examples

```wolfram
(* Specify feature types for classification *)
Classify[data, FeatureTypes -> {"Numerical", "Nominal", "Numerical"}]

(* Specify image type *)
Classify[imageData, FeatureTypes -> "Image"]

(* Mixed types *)
Predict[data, FeatureTypes -> {1 -> "Numerical", 2 -> "Nominal"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeatureTypes.html) for more details.*