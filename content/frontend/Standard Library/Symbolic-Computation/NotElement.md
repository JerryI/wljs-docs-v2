# NotElement

`NotElement[x, dom]` or `x∉dom` asserts that x is not an element of the domain dom.

`NotElement[x1|…|xn, dom]` asserts that none of the xi are elements of dom.

`NotElement[patt, dom]` asserts that any expression matching the pattern patt is not an element of the domain dom.

## Examples

Assert that x is not a real number:

```wolfram
NotElement[x, Reals]
(* x ∉ Reals *)
```

Solve with a domain constraint:

```wolfram
Solve[x^2 == -1, x, Complexes]
(* {{x -> -I}, {x -> I}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NotElement.html) for more details.*