---
title: LetterCounts
---

`LetterCounts["string"]` gives an association whose keys are the distinct letters in string, and whose values give the number of times those letters appear in string.

- `LetterCounts["string", n]` gives counts of the distinct n-grams consisting of runs of n letters in string.
- `LetterCounts["string", n, {c1, c2, …}]` allows the characters ci to appear in n-grams, in addition to ordinary letters.
- `LetterCounts[{string1, string2, …}, …]` gives the counts for each of the stringi.

## Examples

```wolfram
LetterCounts["hello world"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LetterCounts.html) for more details.*