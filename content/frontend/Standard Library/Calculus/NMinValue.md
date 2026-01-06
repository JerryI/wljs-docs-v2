# NMinValue

`NMinValue[f, x]` gives the global minimum value of *f* with respect to *x*.

- `NMinValue[f, {x, y, ...}]` gives the global minimum value of *f* with respect to *x*, *y*, ....
- `NMinValue[{f, cons}, {x, y, ...}]` gives the global minimum value of *f* subject to the constraints *cons*.
- `NMinValue[..., x ∈ reg]` constrains *x* to be in the region *reg*.

## Examples

```wolfram
NMinValue[x^2 + y^2, {x, y}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NMinValue.html) for more details.*