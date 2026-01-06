# MoleculeMatchQ

`MoleculeMatchQ[mol, patt]` returns `True` if the Molecule matches the given pattern.

- `MoleculeMatchQ[patt]` represents an operator form that can be applied to a molecule.

## Examples

```wolfram
MoleculeMatchQ[Molecule["Caffeine"], "c1ccccc1"]
```

```wolfram
MoleculeMatchQ[Molecule["Ethanol"], "CCO"]
```

```wolfram
Select[molecules, MoleculeMatchQ["benzene"]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoleculeMatchQ.html) for more details.*