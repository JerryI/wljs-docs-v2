# Residue

`Residue[expr, {z, z0}]` finds the residue of expr at the point z = z0.

## Examples

Find the residue of a simple pole:

```wolfram
Residue[1/z, {z, 0}]
(* 1 *)
```

Residue at a higher-order pole:

```wolfram
Residue[1/z^3, {z, 0}]
(* 0 *)

Residue[1/(z - 1)^2, {z, 1}]
(* 0 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Residue.html) for more details.*