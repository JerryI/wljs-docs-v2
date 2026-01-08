---
title: MinimalPolynomial
---

`MinimalPolynomial[s, x]` gives the minimal polynomial in x for which the algebraic number s is a root.

- `MinimalPolynomial[u, x]` gives the minimal polynomial of the finite field element u over p.
- `MinimalPolynomial[u, x, k]` gives the minimal polynomial of u over the p^k-element subfield of the ambient field of u.
- `MinimalPolynomial[u, x, emb]` gives the minimal polynomial of u relative to the finite field embedding emb.

## Examples

```wolfram
MinimalPolynomial[Sqrt[2], x]
```

```wolfram
MinimalPolynomial[2^(1/3) + Sqrt[3], x]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinimalPolynomial.html) for more details.