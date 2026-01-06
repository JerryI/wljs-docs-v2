# Parenthesize

`Parenthesize[expr, fmt, prec, group]` or `Parenthesize[expr, fmt, {prec, group}]` will represent expr in format fmt and parenthesize it if necessary when it is an operand to an operator of the given precedence and grouping.

- `Parenthesize[expr, fmt, head]` infers prec and group from the operator, if any, used by the symbol head in fmt.
- `Parenthesize[expr, fmt, prec, group, side]` or `Parenthesize[expr, fmt, head, side]` assume expr appears on the specified side of the operator.

## Examples

```wolfram
Parenthesize[a + b, StandardForm, Times]
```

```wolfram
Parenthesize[x^2, TraditionalForm, 500, Left]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Parenthesize.html) for more details.*