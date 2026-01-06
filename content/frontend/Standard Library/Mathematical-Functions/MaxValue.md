# MaxValue

`MaxValue[f, x]` gives the maximum value of f with respect to x.

- `MaxValue[f, {x, y, ...}]` gives the maximum value of f with respect to x, y, ….
- `MaxValue[{f, cons}, {x, y, ...}]` gives the maximum value of f subject to the constraints cons.
- `MaxValue[..., x ∈ rdom]` constrains x to be in the region or domain rdom.
- `MaxValue[..., ..., dom]` constrains variables to the domain dom, typically Reals or Integers.

## Examples

```wolfram
MaxValue[x (1 - x), x]
```

```wolfram
MaxValue[{x + y, x^2 + y^2 <= 1}, {x, y}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxValue.html) for more details.*