# SpellingOptions

`SpellingOptions` is an option for notebooks that specifies settings for spellchecking.

## Examples

Get current spelling options:

```wolfram
Options[EvaluationNotebook[], SpellingOptions]
```

Set spelling options for a notebook:

```wolfram
SetOptions[EvaluationNotebook[], 
  SpellingOptions -> {"AutoSpellCheck" -> True}]
```

Disable spellcheck:

```wolfram
SetOptions[EvaluationNotebook[], 
  SpellingOptions -> {"AutoSpellCheck" -> False}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpellingOptions.html) for more details.*