# MoleculeProperty

`MoleculeProperty[pname]` represents a property identified by pname for use in `MoleculeValue`.

- `MoleculeProperty[{pname, item}]` represents a property that applies to item within a molecule.

## Examples

Define a molecule property:
```wolfram
MoleculeProperty["MolecularMass"]
```

Get a property value:
```wolfram
MoleculeValue[Molecule["ethanol"], MoleculeProperty["MolecularMass"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoleculeProperty.html) for more details.*