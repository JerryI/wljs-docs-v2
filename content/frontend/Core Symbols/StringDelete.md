# StringDelete

`StringDelete["string", patt]` yields the string obtained by deleting from string all occurrences of anything matching the string pattern patt.

`StringDelete[patt]` represents an operator form of StringDelete that can be applied to an expression.

## Examples

Delete substrings:

```wolfram
StringDelete["the cat in the hat", "the "]
(* "cat in hat" *)
```

Delete pattern matches:

```wolfram
StringDelete["abc123def", DigitCharacter]
(* "abcdef" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringDelete.html) for more details.*