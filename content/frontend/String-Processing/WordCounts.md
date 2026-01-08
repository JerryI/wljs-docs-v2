---
title: WordCounts
---

`WordCounts["string"]` gives an association whose keys are the distinct words identified in string, and whose values give the number of times those words appear.

- `WordCounts["string", n]` gives counts of the distinct n-grams consisting of runs of n words in string.
- `WordCounts[{string1, string2, ...}, ...]` gives the counts for each of the strings.

## Examples

Count words in a string:

```wolfram
WordCounts["the quick brown fox jumps over the lazy dog"]
```

Count bigrams (word pairs):

```wolfram
WordCounts["to be or not to be", 2]
```

Count words in multiple strings:

```wolfram
WordCounts[{"hello world", "world hello hello"}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WordCounts.html) for more details.