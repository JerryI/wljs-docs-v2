# IncludePods

`IncludePods` is an option for WolframAlpha that determines specific pod IDs to include in the results.

## Examples

Include only specific pods:

```wolfram
WolframAlpha["pi", IncludePods -> "DecimalApproximation"]
```

Include multiple pods:

```wolfram
WolframAlpha["sun", IncludePods -> {"BasicInformation", "PhysicalProperties"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IncludePods.html) for more details.*