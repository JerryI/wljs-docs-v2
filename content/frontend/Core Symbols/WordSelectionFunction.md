# WordSelectionFunction

`WordSelectionFunction` is an option for `WordCloud` and other functions that specifies which words to use.

## Examples

Filter words by length in a word cloud:
```wolfram
WordCloud[text, WordSelectionFunction -> (StringLength[#] > 3 &)]
```

Include only capitalized words:
```wolfram
WordCloud[text, WordSelectionFunction -> (UpperCaseQ[StringTake[#, 1]] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WordSelectionFunction.html) for more details.*