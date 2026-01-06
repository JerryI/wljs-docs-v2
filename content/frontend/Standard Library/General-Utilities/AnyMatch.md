# AnyMatch

`AnyMatch[{e1, e2, ...}, form]` yields `True` if ei matches the pattern form for any of the ei.

`AnyMatch[expr, form, level]` tests parts of expr at level level.

`AnyMatch[form]` represents an operator form of `AnyMatch` that can be applied to an expression.

## Examples

Check if any element matches a pattern:

```wolfram
AnyMatch[{1, 2, "a", 3}, _String]
(* True *)
```

Using operator form:

```wolfram
AnyMatch[_Integer][{1.5, 2.5, 3}]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnyMatch.html) for more details.*