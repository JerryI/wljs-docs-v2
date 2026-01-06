# DigitCharacter

`DigitCharacter` represents a digit character 0–9 in StringExpression.

## Examples

Match all digits in a string:

```wolfram
StringCases["abc123def456", DigitCharacter]
(* {"1", "2", "3", "4", "5", "6"} *)
```

Match sequences of digits:

```wolfram
StringCases["abc123def456", DigitCharacter ..]
(* {"123", "456"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DigitCharacter.html) for more details.*