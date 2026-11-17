---
title: MoleculePlot
description: Create a two-dimensional molecular structure diagram.
---

`MoleculePlot[mol]` creates a two-dimensional structure diagram of the molecule `mol`.

`MoleculePlot[mol, patt]` highlights the atoms and bonds that match `patt`.

## Examples

Draw a molecule:

```wolfram
molecule = Molecule["NC(=O)C[C@H](C(=O)O)N"];
MoleculePlot[molecule]
```

Highlight two atoms by index:

```wolfram
MoleculePlot[molecule, {3, 8}]
```

Highlight every carbonyl bond:

```wolfram
MoleculePlot[molecule, Bond[{"C", "O"}, "Double"]]
```

For a reusable multi-atom query, pass a [`MoleculePattern`](./MoleculePattern) as the second argument.

See [`Molecule`](./Molecule), [`Bond`](./Bond), and [`MoleculePlot3D`](./MoleculePlot3D).

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoleculePlot.html) for more details.
