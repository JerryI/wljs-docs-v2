# ShortestMatch

`ShortestMatch[p]` is a string pattern object matching the shortest sequence of characters consistent with the string pattern p.

## Examples

Match shortest string:

```wolfram
StringCases["aXbXc", "a" ~~ ShortestMatch[__] ~~ "c"]
(* {"aXbXc"} *)
```

Compare with greedy match:

```wolfram
StringCases["<a><b>", "<" ~~ ShortestMatch[__] ~~ ">"]
(* {"<a>", "<b>"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShortestMatch.html) for more details.*