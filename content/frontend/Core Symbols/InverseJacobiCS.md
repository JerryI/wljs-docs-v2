# InverseJacobiCS

`InverseJacobiCS[v, m]` gives the inverse Jacobi elliptic function cs⁻¹(v|m).

This is the inverse of the Jacobi elliptic function `JacobiCS[u, m]`, which represents the ratio cn(u|m)/sn(u|m).

## Examples

```wolfram
InverseJacobiCS[2, 0.5]
```

```wolfram
N[InverseJacobiCS[1, 1/2]]
```

```wolfram
(* Verify inverse property *)
JacobiCS[InverseJacobiCS[v, m], m] // Simplify
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseJacobiCS.html) for more details.*