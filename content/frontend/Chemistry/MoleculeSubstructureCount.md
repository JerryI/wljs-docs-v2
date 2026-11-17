---
title: MoleculeSubstructureCount
description: Count occurrences of a molecular substructure.
---

`MoleculeSubstructureCount[mol, patt]` returns the number of times `patt` occurs as a substructure in `mol`.

`MoleculeSubstructureCount[patt]` is the operator form that can be applied to a molecule.

## Examples

Count five-carbon chains in hexane:

```wolfram
pattern = MoleculePattern["CCCCC"];
MoleculeSubstructureCount[Molecule["hexane"], pattern]
```

Apply the same query to several molecules:

```wolfram
MoleculeSubstructureCount[pattern] /@
  (Molecule /@ {"pentane", "hexane", "heptane"})
```

Use [`FindMoleculeSubstructure`](./FindMoleculeSubstructure) when the matching atom indices are also needed.

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoleculeSubstructureCount.html) for more details.
