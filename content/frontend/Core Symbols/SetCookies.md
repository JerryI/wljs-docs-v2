# SetCookies

`SetCookies[assoc]` sets cookies with attributes specified by the association assoc, to be used by functions such as `URLExecute`.

- `SetCookies[{assoc1, assoc2, ...}]` sets a list of cookies.

## Examples

```wolfram
SetCookies[<|"Name" -> "session", "Value" -> "abc123"|>]
```

```wolfram
SetCookies[{<|"Name" -> "user", "Value" -> "john"|>, <|"Name" -> "token", "Value" -> "xyz"|>}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetCookies.html) for more details.*