# StringRiffle

`StringRiffle[{s1, s2, s3, ...}]` concatenates strings with spaces between them.

`StringRiffle[list, sep]` uses sep as the separator.

## Examples

Join with spaces:

```wolfram
StringRiffle[{"a", "b", "c"}]
(* "a b c" *)
```

Join with custom separator:

```wolfram
StringRiffle[{"a", "b", "c"}, ", "]
(* "a, b, c" *)
```

With delimiters:

```wolfram
StringRiffle[{"a", "b", "c"}, {"[", ", ", "]"}]
(* "[a, b, c]" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringRiffle.html) for more details.*