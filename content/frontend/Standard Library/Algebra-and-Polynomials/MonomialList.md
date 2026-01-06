# MonomialList

`MonomialList[poly]` gives the list of all monomials in the polynomial poly.

- `MonomialList[poly, {x1, x2, ...}]` gives the list of monomials with respect to the variables xi in poly.
- `MonomialList[poly, {x1, x2, ...}, order]` puts the monomials in the specified order.

## Examples

```wolfram
MonomialList[x^2 + 3x*y + y^2, {x, y}]
```

```wolfram
MonomialList[a + b x + c x^2, {x}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MonomialList.html) for more details.*