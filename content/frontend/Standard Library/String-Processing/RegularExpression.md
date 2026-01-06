# RegularExpression

`RegularExpression["regex"]` represents the generalized regular expression specified by the string "regex".

## Examples

Match digits in a string:

```wolfram
StringCases["abc123def", RegularExpression["[0-9]+"]]
(* {"123"} *)
```

Replace using regex:

```wolfram
StringReplace["hello world", RegularExpression["\\s+"] -> "-"]
(* "hello-world" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegularExpression.html) for more details.*