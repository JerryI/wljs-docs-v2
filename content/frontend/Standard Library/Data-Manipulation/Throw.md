# Throw

`Throw[value]` stops evaluation and returns value as the value of the nearest enclosing `Catch`.

`Throw[value, tag]` is caught only by `Catch[expr, form]` where tag matches form.

## Examples

Throw and catch a value:

```wolfram
Catch[
  Do[If[i > 5, Throw[i]], {i, 1, 10}]
]
(* 6 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Throw.html) for more details.*