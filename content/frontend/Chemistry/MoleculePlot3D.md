---
title: MoleculePlot3D
description: Create an interactive three-dimensional molecular model.
---

`MoleculePlot3D[mol]` creates a three-dimensional model of the molecule `mol`.

`MoleculePlot3D[mol, patt]` highlights the atoms and bonds that match `patt`.

## Examples

Display a molecule in three dimensions:

```wolfram
molecule = Molecule["NC(=O)C[C@H](C(=O)O)N"];
MoleculePlot3D[molecule]
```

Highlight all oxygen atoms:

```wolfram
MoleculePlot3D[molecule, Atom["O"]]
```

Choose a molecular rendering style:

```wolfram
MoleculePlot3D[Molecule["caffeine"], PlotTheme -> "BallAndStick"]
```

See [`Molecule`](./Molecule), [`MoleculePlot`](./MoleculePlot), and [`MoleculePattern`](./MoleculePattern).

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoleculePlot3D.html) for more details.
