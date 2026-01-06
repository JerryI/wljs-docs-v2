# InverseJacobiDN

`InverseJacobiDN[v, m]` gives the inverse Jacobi elliptic function dn⁻¹(v|m).

This is the inverse of the Jacobi elliptic function `JacobiDN[u, m]`.

## Examples

```wolfram
InverseJacobiDN[0.9, 0.5]
```

```wolfram
N[InverseJacobiDN[0.8, 1/2]]
```

```wolfram
(* Verify inverse property *)
JacobiDN[InverseJacobiDN[v, m], m] // Simplify
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseJacobiDN.html) for more details.*