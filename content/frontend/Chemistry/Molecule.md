---
title: Molecule
description: Create, inspect, and visualize molecular structures in WLJS Notebook.
---

`Molecule[name]` creates a molecular structure from a chemical name, SMILES string, InChI string, chemical entity, or another supported identifier.

A molecular formula is not necessarily a valid molecule identifier. For example, `Molecule["CH4"]` does not interpret `"CH4"` as methane. Use the SMILES form `Molecule["C"]`, the chemical name `Molecule["methane"]`, or [`ChemicalFormula["CH4"]`](./ChemicalFormula) when only the formula is needed.

`Molecule[{atom1, atom2, ...}, {bond1, bond2, ...}]` constructs a molecule explicitly from atoms and bonds. A bond uses the form `Bond[{i, j}, type]`, where `i` and `j` are atom indices and `type` can be `"Single"`, `"Double"`, `"Triple"`, or `"Aromatic"`.

WLJS Notebook displays `Molecule` objects directly in notebook output. Use `MoleculePlot` or `MoleculePlot3D` when you need an explicit two- or three-dimensional visualization.

## Examples

Create a molecule from a SMILES string:

```wolfram
Molecule["NC(=O)C[C@H](C(=O)O)N"]
```

Create water from an explicit atom and bond specification:

```wolfram
water = Molecule[
  {"O", "H", "H"},
  {
    Bond[{1, 2}, "Single"],
    Bond[{1, 3}, "Single"]
  }
]
```

Draw a two-dimensional structure diagram:

```wolfram
MoleculePlot[Molecule["caffeine"]]
```

Create a three-dimensional molecular model:

```wolfram
MoleculePlot3D[Molecule["caffeine"]]
```

### Highlight a molecular substructure

Define a sulfur–oxygen bond pattern, then highlight every match in a molecule:

```wolfram
sulfurOxygenBond = MoleculePattern[
  {"S", "O"},
  {Bond[{1, 2}, "Single"]}
];

molecule = Molecule["4-methylbenzenesulfonic acid"];
MoleculePlot[molecule, sulfurOxygenBond]
```

Use `MoleculeMatchQ`, `FindMoleculeSubstructure`, and `MoleculeSubstructureCount` for programmatic substructure tests and searches.

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Molecule.html) for more details.
