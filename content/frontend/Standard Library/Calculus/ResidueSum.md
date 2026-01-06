# ResidueSum

`ResidueSum[f, z]` finds the sum of residues of the meromorphic function f with the variable z.

- `ResidueSum[{f, cons}, z]` finds the sum of residues of f within the solution set of the constraints cons.

## Examples

Sum of all residues:

```wolfram
ResidueSum[1/(z^2 - 1), z]
(* 0 *)
```

With constraints:

```wolfram
ResidueSum[{1/z, Im[z] > 0}, z]
```

For a rational function:

```wolfram
ResidueSum[1/((z - 1)(z - 2)), z]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ResidueSum.html) for more details.*