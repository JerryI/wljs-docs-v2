# NoneMatch

`NoneMatch[{e1, e2, ...}, form]` yields True if ei does not match the pattern form for any of the ei.

- `NoneMatch[expr, form, level]` tests parts of expr at level level.
- `NoneMatch[form]` represents an operator form of NoneMatch that can be applied to an expression.

## Examples

Check if no elements match a pattern:
```wolfram
NoneMatch[{1, 2, 3}, _String]
```

Test with strings:
```wolfram
NoneMatch[{"a", "b", "c"}, _Integer]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NoneMatch.html) for more details.*