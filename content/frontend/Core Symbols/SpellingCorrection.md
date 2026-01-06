# SpellingCorrection

`SpellingCorrection` is an option for `StringMatchQ`, `Names`, and related functions that specifies whether strings should be considered to match even when a small fraction of the characters in them are different.

## Examples

```wolfram
StringMatchQ["hello", "hallo", SpellingCorrection -> True]
```

```wolfram
Names["Integrat*", SpellingCorrection -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpellingCorrection.html) for more details.*