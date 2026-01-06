# IgnoreStereochemistry

`IgnoreStereochemistry` is an option for `MoleculeMatchQ` that determines whether stereochemistry should be ignored for pattern matching.

## Examples

Ignore stereochemistry:

```wolfram
MoleculeMatchQ[mol1, mol2, IgnoreStereochemistry -> True]
```

Strict matching:

```wolfram
MoleculeMatchQ[mol1, mol2, IgnoreStereochemistry -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IgnoreStereochemistry.html) for more details.*