---
title: MoleculePattern
description: Define a reusable pattern of atoms and bonds.
---

`MoleculePattern[{atom1, atom2, ...}, {bond1, bond2, ...}]` represents a molecular substructure pattern.

`MoleculePattern[smarts]` creates a pattern from a SMARTS string.

## Examples

Define a sulfur–oxygen single-bond pattern:

```wolfram
sulfurOxygenBond = MoleculePattern[
  {"S", "O"},
  {Bond[{1, 2}, "Single"]}
]
```

Highlight every matching substructure:

```wolfram
molecule = Molecule["4-methylbenzenesulfonic acid"];
MoleculePlot[molecule, sulfurOxygenBond]
```

Create a pattern from SMARTS and count its occurrences:

```wolfram
chain = MoleculePattern["CCCCC"];
MoleculeSubstructureCount[Molecule["hexane"], chain]
```

See [`Bond`](./Bond), [`FindMoleculeSubstructure`](./FindMoleculeSubstructure), and [`MoleculeSubstructureCount`](./MoleculeSubstructureCount).

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoleculePattern.html) for more details.
