# NumberString

`NumberString` represents the characters of a number in StringExpression.

## Examples

Match a number in a string:

```wolfram
StringMatchQ["123", NumberString]
(* True *)
```

Extract numbers:

```wolfram
StringCases["abc 123 def 456", NumberString]
(* {"123", "456"} *)
```

Match decimal numbers:

```wolfram
StringMatchQ["3.14", NumberString]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NumberString.html) for more details.*