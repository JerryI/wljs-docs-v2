---
title: TotalWidth
---

`TotalWidth` is an option that can be set for output streams to specify the maximum total number of characters of text that should be printed for each output expression. Short forms of expressions are given if the number of characters needed to print the whole expression is too large.

## Examples

Limit output width when writing to a stream:

```wolfram
str = OpenWrite["output.txt", TotalWidth -> 40];
Write[str, Range[100]];
Close[str];
```

Set total width for output:

```wolfram
SetOptions[$Output, TotalWidth -> 80]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TotalWidth.html) for more details.*