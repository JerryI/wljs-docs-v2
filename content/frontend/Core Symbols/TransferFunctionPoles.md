# TransferFunctionPoles

`TransferFunctionPoles[tfm]` gives a matrix of roots of the denominators in the TransferFunctionModel tfm.

- `TransferFunctionPoles[tfm, reg]` only gives the roots inside the region reg on the complex plane.

## Examples

Find poles of a transfer function:

```wolfram
tfm = TransferFunctionModel[1/(s^2 + 3 s + 2), s];
TransferFunctionPoles[tfm]
(* {{-2, -1}} *)
```

Find only unstable poles (in right half-plane):

```wolfram
TransferFunctionPoles[tfm, "RightHalfPlane"]
```

Multi-input multi-output system:

```wolfram
TransferFunctionPoles[TransferFunctionModel[{{1/(s + 1), 1/(s + 2)}}, s]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransferFunctionPoles.html) for more details.*