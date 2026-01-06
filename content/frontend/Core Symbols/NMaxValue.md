# NMaxValue

`NMaxValue[f, x]` gives the global maximum value of f with respect to x.

- `NMaxValue[f, {x, y, ...}]` gives the global maximum value of f with respect to x, y, ....
- `NMaxValue[{f, cons}, {x, y, ...}]` gives the global maximum value of f subject to the constraints cons.
- `NMaxValue[..., x ∈ reg]` constrains x to be in the region reg.

## Examples

Find the maximum of a function:
```wolfram
NMaxValue[Sin[x] Cos[x], x]
```

Maximum with constraints:
```wolfram
NMaxValue[{x^2 + y^2, x + y <= 1}, {x, y}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NMaxValue.html) for more details.*