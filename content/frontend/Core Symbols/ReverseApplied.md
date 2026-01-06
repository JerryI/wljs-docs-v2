# ReverseApplied

`ReverseApplied[f]` represents a form of f that takes arguments in reverse order so that `ReverseApplied[f][x1, ..., xn]` is equivalent to `f[xn, ..., x1]`.

- `ReverseApplied[f, n]` represents a form of f that reverses the first n arguments before evaluation.

## Examples

Reverse all arguments:

```wolfram
ReverseApplied[Divide][2, 10]
(* 5 *)
```

Reverse first 2 arguments:

```wolfram
ReverseApplied[f, 2][a, b, c, d]
(* f[b, a, c, d] *)
```

Use with Subtract:

```wolfram
ReverseApplied[Subtract][3, 10]
(* 7 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReverseApplied.html) for more details.*