# BooleanConvert

`BooleanConvert[expr]` converts the Boolean expression expr to disjunctive normal form.

`BooleanConvert[expr, form]` converts the Boolean expression expr to the specified form.

`BooleanConvert[expr, form, cond]` finds an expression in the specified form that is equivalent to expr when cond is true.

## Examples

Convert to DNF:

```wolfram
BooleanConvert[(a || b) && c]
(* (a && c) || (b && c) *)
```

Convert to CNF:

```wolfram
BooleanConvert[a || (b && c), "CNF"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BooleanConvert.html) for more details.*