---
title: MoleculeMatchQ
description: Test whether a molecule matches a molecular pattern.
---

`MoleculeMatchQ[mol, patt]` returns `True` when the molecule `mol` matches `patt`, and `False` otherwise.

`MoleculeMatchQ[patt]` is the operator form that can be applied to a molecule.

## Examples

Test a molecule against a SMARTS pattern:

```wolfram
pattern = MoleculePattern["CCO"];
MoleculeMatchQ[Molecule["ethanol"], pattern]
```

Use the operator form:

```wolfram
Select[
  Molecule /@ {"ethanol", "propane", "propanol"},
  MoleculeMatchQ[MoleculePattern["*CO"]]
]
```

Use [`FindMoleculeSubstructure`](./FindMoleculeSubstructure) when the atom-index mapping of a match is needed.

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoleculeMatchQ.html) for more details.
