# ExcludedLines

`ExcludedLines` is an option for `SemanticImport` and related functions that specifies which lines should be ignored for further processing.

## Examples

Exclude header lines:

```wolfram
SemanticImport["data.csv", ExcludedLines -> {1, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExcludedLines.html) for more details.*