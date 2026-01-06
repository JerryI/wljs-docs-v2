# PrivateEvaluationOptions

`PrivateEvaluationOptions` is an option for selections that specifies settings for evaluation-related suboptions.

## Examples

Set private evaluation options for a cell:
```wolfram
Cell["code", PrivateEvaluationOptions -> {"DynamicUpdateInterval" -> 0.5}]
```

Configure evaluation behavior:
```wolfram
SetOptions[EvaluationNotebook[], PrivateEvaluationOptions -> {}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PrivateEvaluationOptions.html) for more details.*