---
title: ProteinData
---

`ProteinData[entity]` gives the reference amino acid sequence for the protein entity.

`ProteinData[entity,property]` gives the value of the specified property for the protein entity.

`ProteinData[entity,property,annotation]` gives the specified annotation associated with the given property.

## Examples

Get properties of insulin:

```wolfram
ProteinData["Insulin", "MolecularWeight"]
```

Get the amino acid sequence:

```wolfram
ProteinData["Hemoglobin", "AminoAcidSequence"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProteinData.html) for more details.*