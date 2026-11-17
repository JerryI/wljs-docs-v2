---
title: PatternReaction
description: Represent a templated reaction between molecular patterns.
---

`PatternReaction[reactants -> products]` represents a templated reaction between lists of [`MoleculePattern`](./MoleculePattern) objects.

`PatternReaction[reactants -> products, mapping]` explicitly maps atoms in the reactant patterns to atoms in the product patterns.

`PatternReaction[smarts]` creates a reaction template from a reaction SMARTS string.

## Examples

Define a Diels–Alder reaction using reaction SMARTS:

```wolfram
dielsAlder = PatternReaction[
  "[C:1]=[C:2][C:3]=[C:4].[C:5]=[C:6]>>[C:1]1[C:2]=[C:3][C:4][C:5][C:6]1"
]
```

Inspect the reactant patterns, product patterns, and atom mapping:

```wolfram
{
  dielsAlder["Reactants"],
  dielsAlder["Products"],
  dielsAlder["AtomMapping"]
}
```

Use [`ApplyReaction`](./ApplyReaction) to apply the template to molecules.

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PatternReaction.html) for more details.
