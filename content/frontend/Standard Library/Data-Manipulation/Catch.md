# Catch

`Catch[expr]` returns the argument of the first `Throw` generated in the evaluation of expr.

`Catch[expr, form]` returns value from the first `Throw[value, tag]` for which form matches tag.

## Examples

Catch a thrown value:

```wolfram
Catch[Throw["found it"]]
(* "found it" *)
```

With tags:

```wolfram
Catch[Throw[42, "myTag"], "myTag"]
(* 42 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Catch.html) for more details.*