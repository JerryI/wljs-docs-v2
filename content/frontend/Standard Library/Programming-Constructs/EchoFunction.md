# EchoFunction

`EchoFunction[f][expr]` prints f[expr] and returns expr.

`EchoFunction[label, f][expr]` prints f[expr] prepending label and returns expr.

## Examples

Echo the length:

```wolfram
EchoFunction[Length][{a, b, c, d}]
(* prints: 4, returns {a, b, c, d} *)
```

With label:

```wolfram
EchoFunction["count: ", Length][{1, 2, 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EchoFunction.html) for more details.*