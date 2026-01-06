# LongestMatch

`LongestMatch[p]` is a string pattern object matching the longest sequence of characters consistent with the string pattern p.

## Examples

```wolfram
StringCases["abcabc", LongestMatch["a" ~~ __ ~~ "c"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LongestMatch.html) for more details.*