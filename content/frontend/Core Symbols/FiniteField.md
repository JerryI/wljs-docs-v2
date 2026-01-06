# FiniteField

`FiniteField[p, d]` gives a finite field with p^d elements.

- `FiniteField[p, f]` gives the finite field defined by the irreducible polynomial f.
- `FiniteField[p, ..., rep]` uses field element representation rep, either "Polynomial" or "Exponential".

## Examples

Create a finite field with 8 elements:

```wolfram
ff = FiniteField[2, 3]
```

Get elements of a finite field:

```wolfram
ff = FiniteField[3, 2];
ff["Elements"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FiniteField.html) for more details.*