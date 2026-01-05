# Defer

`Defer[expr]` yields an object that displays as the unevaluated form of expr, but evaluates when used as input.

## Examples

Defer an expression:

```wolfram
Defer[1 + 1]
(* 1 + 1 - displays unevaluated *)
```

Copy-paste the output and it evaluates:

```wolfram
(* If you copy "1 + 1" from above and evaluate: *)
1 + 1
(* 2 *)
```

Useful for generating code:

```wolfram
Defer[Plot[Sin[x], {x, 0, 2 Pi}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Defer.html) for more details.*