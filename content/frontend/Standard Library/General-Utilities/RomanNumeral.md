# RomanNumeral

`RomanNumeral[n]` gives a string corresponding to the Roman numeral form of the integer n.

## Examples

Convert integer to Roman numeral:

```wolfram
RomanNumeral[42]
(* "XLII" *)
```

Convert multiple values:

```wolfram
Table[{i, RomanNumeral[i]}, {i, 1, 10}]
(* {{1, "I"}, {2, "II"}, {3, "III"}, ...} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RomanNumeral.html) for more details.*