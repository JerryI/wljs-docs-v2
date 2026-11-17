---
title: FindMoleculeSubstructure
description: Find atom-index mappings for molecular substructure matches.
---

`FindMoleculeSubstructure[mol, patt]` finds a mapping between the atom indices in `patt` and one occurrence in `mol`.

`FindMoleculeSubstructure[mol, patt, All]` returns mappings for all occurrences. Replace `All` with an integer `n` to return at most `n` mappings.

## Examples

Find every five-carbon chain in hexane:

```wolfram
molecule = Molecule["hexane"];
pattern = MoleculePattern["CCCCC"];

FindMoleculeSubstructure[molecule, pattern, All]
```

Highlight the atoms from the first match:

```wolfram
match = First[FindMoleculeSubstructure[molecule, pattern]];
MoleculePlot[molecule, Values[match]]
```

See [`MoleculePattern`](./MoleculePattern) and [`MoleculeSubstructureCount`](./MoleculeSubstructureCount).

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMoleculeSubstructure.html) for more details.
