---
title: Bond
description: Represent a chemical bond between atoms in a molecule.
---

`Bond[{i, j}, type]` represents a chemical bond between the atoms at indices `i` and `j`.

Common bond types are `"Single"`, `"Double"`, `"Triple"`, and `"Aromatic"`. In molecule patterns, atom specifications such as `"C"` and `"O"` can be used instead of numeric indices.

## Examples

Construct a water molecule with two single bonds:

```wolfram
Molecule[
  {"O", "H", "H"},
  {
    Bond[{1, 2}, "Single"],
    Bond[{1, 3}, "Single"]
  }
]
```

Use a bond as a pattern that matches carbon–oxygen double bonds:

```wolfram
carbonylBond = Bond[{"C", "O"}, "Double"];
MoleculePlot[Molecule["acetone"], carbonylBond]
```

See [`Molecule`](./Molecule), [`MoleculePattern`](./MoleculePattern), and [`MoleculePlot`](./MoleculePlot).

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Bond.html) for more details.
