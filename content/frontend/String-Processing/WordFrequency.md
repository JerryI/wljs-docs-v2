---
title: WordFrequency
---

`WordFrequency[text, word]` gives the frequency of word in text.

- `WordFrequency[text, {word1, word2, ...}]` gives an association of the frequencies of each of the wordi.

This function calculates how often words appear in text as a fraction of total words.

## Examples

```wolfram
WordFrequency["the cat and the dog", "the"]
```

```wolfram
WordFrequency[ExampleData[{"Text", "AliceInWonderland"}], "Alice"]
```

```wolfram
WordFrequency["hello world hello", {"hello", "world"}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WordFrequency.html) for more details.