---
title: WordFrequencyData
---

`WordFrequencyData[word]` gives the frequency of word in typical published English text.

- `WordFrequencyData[{word1, word2, ...}]` gives an association of frequencies of the wordi.
- `WordFrequencyData[word, "TimeSeries"]` gives a time series for the frequency of word in typical published English text.
- `WordFrequencyData[word, "TimeSeries", datespec]` gives a time series for dates specified by datespec.
- `WordFrequencyData[word, "prop"]` gives property prop of the word frequency.

## Examples

Get the frequency of a word:
```wolfram
WordFrequencyData["computer"]
```

Compare frequencies of multiple words:
```wolfram
WordFrequencyData[{"science", "technology", "engineering"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WordFrequencyData.html) for more details.*