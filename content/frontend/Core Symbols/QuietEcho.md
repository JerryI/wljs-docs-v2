# QuietEcho

`QuietEcho[expr]` evaluates expr without letting `Echo` and related functions inside expr print any result.

## Examples

```wolfram
QuietEcho[Echo["test"]; 1 + 1]
```

```wolfram
QuietEcho[EchoFunction[Identity, x^2]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuietEcho.html) for more details.*