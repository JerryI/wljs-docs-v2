# MissingDataMethod

`MissingDataMethod` is an option to TemporalData and other functions that controls how to process missing data.

## Examples

Specify how to handle missing data:

```wolfram
TemporalData[{1, Missing[], 3}, MissingDataMethod -> "Interpolation"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MissingDataMethod.html) for more details.*