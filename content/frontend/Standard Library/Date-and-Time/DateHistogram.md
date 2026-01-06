---
title: DateHistogram
---

`DateHistogram[{date1,date2,…}]` plots a histogram of the dates datei.

`DateHistogram[{date1,date2,…},bspec]` plots a histogram with bin width specification bspec.

`DateHistogram[{date1,date2,…},bspec,hspec]` plots a histogram with bin heights computed according to the specification hspec.

`DateHistogram[{data1,data2,…}]` plots histograms for multiple datasets datai.

## Examples

Plot a histogram of dates:

```wolfram
DateHistogram[{"2020-01-01", "2020-02-15", "2020-02-20", "2020-03-10"}]
```

Specify monthly bins:

```wolfram
DateHistogram[{"2020-01-01", "2020-02-15", "2020-03-10"}, "Month"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateHistogram.html) for more details.*