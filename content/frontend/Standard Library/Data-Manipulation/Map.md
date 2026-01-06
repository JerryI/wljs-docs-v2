# Map

`Map[f, expr]` or `f /@ expr` applies f to each element on the first level in expr.

`Map[f, expr, levelspec]` applies f to parts of expr specified by levelspec.

`Map[f]` represents an operator form of Map that can be applied to an expression.

## Examples

Apply a function to each element:

```wolfram
Map[f, {a, b, c}]
(* {f[a], f[b], f[c]} *)
```

Using the shorthand notation:

```wolfram
Sqrt /@ {1, 4, 9, 16}
(* {1, 2, 3, 4} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Map.html) for more details.*