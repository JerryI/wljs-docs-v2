---
title: Atom
description: Represent an atom and its chemical properties.
---

`Atom[symbol]` represents an atom with the specified chemical symbol.

`Atom[symbol, property1 -> value1, ...]` represents an atom with additional properties. `Atom[property -> value]` can also be used as a query that matches atoms with the requested property.

## Examples

Create a carbon atom:

```wolfram
Atom["C"]
```

Specify an isotope and hydrogen count:

```wolfram
Atom["C", "MassNumber" -> 13, "HydrogenCount" -> 3]
```

Use an atom as a pattern when plotting a molecule:

```wolfram
molecule = Molecule["NC(=O)C[C@H](C(=O)O)N"];
MoleculePlot[molecule, Atom["O"]]
```

See [`Molecule`](./Molecule), [`Bond`](./Bond), and [`MoleculePattern`](./MoleculePattern).

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Atom.html) for more details.
