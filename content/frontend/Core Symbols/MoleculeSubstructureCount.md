# MoleculeSubstructureCount

`MoleculeSubstructureCount[mol, patt]` gives a count of the number of times patt appears as a substructure in mol.

- `MoleculeSubstructureCount[patt]` represents an operator form that can be applied to a molecule.

This function counts occurrences of molecular substructures.

## Examples

```wolfram
MoleculeSubstructureCount[Molecule["Caffeine"], Molecule["benzene"]]
```

```wolfram
MoleculeSubstructureCount[Molecule["Aspirin"], "C=O"]
```

```wolfram
MoleculeSubstructureCount["OH"][Molecule["Glucose"]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoleculeSubstructureCount.html) for more details.*