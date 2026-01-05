# AllMatch

`AllMatch[{e1, e2, ...}, form]` yields True if ei matches the pattern form for all of the ei.

`AllMatch[expr, form, level]` tests parts of expr at level level.

`AllMatch[form]` represents an operator form of AllMatch that can be applied to an expression.

## Examples

Check if all elements are positive:

```wolfram
AllMatch[{1, 2, 3, 4}, _?Positive]
(* True *)
```

Check if all elements are integers:

```wolfram
AllMatch[{1, 2, 3.5}, _Integer]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AllMatch.html) for more details.*