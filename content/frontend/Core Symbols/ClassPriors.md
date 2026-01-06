# ClassPriors

`ClassPriors` is an option for `Classify` and related functions that specifies explicit prior probabilities to assume for output classes, independent of anything deduced from the training set.

## Examples

Set class priors for classification:

```wolfram
Classify[trainingData, ClassPriors -> <|"A" -> 0.3, "B" -> 0.7|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClassPriors.html) for more details.*