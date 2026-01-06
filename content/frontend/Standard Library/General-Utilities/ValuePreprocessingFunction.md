# ValuePreprocessingFunction

`ValuePreprocessingFunction` is an option for functions such as PersistentSymbol and InitializationValue that specifies a function to apply to a new value that is being assigned.

## Examples

Preprocess values before storage:

```wolfram
PersistentSymbol["data", ValuePreprocessingFunction -> Compress]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ValuePreprocessingFunction.html) for more details.*