# ToFiniteField

`ToFiniteField[k,ff]` converts the integer k to an element of the prime subfield of the finite field ff.

`ToFiniteField[expr,ff]` converts the coefficients of the rational expression expr to elements of the finite field ff.

`ToFiniteField[expr,ff,t]` converts the coefficients of the rational expression expr to elements of the finite field ff, with t representing the field generator.

## Examples

Convert an integer to a finite field element:

```wolfram
ToFiniteField[5, GF[7]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ToFiniteField.html) for more details.*