# EvaluationData

`EvaluationData[expr]` gives an association containing the result of evaluating expr and metadata about the evaluation process.

## Examples

Get evaluation metadata:

```wolfram
EvaluationData[1 + 1]
(* <|"Result" -> 2, ...| > *)
```

Access timing information:

```wolfram
EvaluationData[Pause[0.1]]["Timing"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EvaluationData.html) for more details.*