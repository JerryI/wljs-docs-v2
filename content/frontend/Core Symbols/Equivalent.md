# Equivalent

`Equivalent[e1, e2, ...]` represents the logical equivalence e1⇔e2⇔..., giving True when all of the ei are the same.

## Examples

Test logical equivalence:

```wolfram
Equivalent[True, True]
(* True *)
```

Mixed values:

```wolfram
Equivalent[True, False]
(* False *)
```

Simplify a logical expression:

```wolfram
BooleanSimplify[Equivalent[p, q]]
(* (p && q) || (!p && !q) *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Equivalent.html) for more details.*