# RecognitionPrior

`RecognitionPrior` is an option for recognition functions that specifies the prior probability or class for recognition.

## Examples

```wolfram
Classify[{1 -> "a", 2 -> "a", 3 -> "b"}, 2.5, RecognitionPrior -> <|"a" -> 0.9, "b" -> 0.1|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RecognitionPrior.html) for more details.*