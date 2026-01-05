# ConfirmBy

`ConfirmBy[expr, f]` confirms that `f[expr]` returns `True`, otherwise throws an error to the nearest `Enclose`.

## Examples

Validate with a predicate:

```wolfram
Enclose[
  x = ConfirmBy[computeValue[], Positive];
  Sqrt[x]
]
(* Throws if value is not positive *)
```

With custom test:

```wolfram
ConfirmBy[result, # > 0 &, "Must be positive"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConfirmBy.html) for more details.*