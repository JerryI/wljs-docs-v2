---
title: ApplyReaction
description: Apply a pattern reaction to a list of molecules.
---

`ApplyReaction[rxn, molecules]` applies the [`PatternReaction`](./PatternReaction) `rxn` to a list of reactant molecules and returns one list of products.

`ApplyReaction[rxn, molecules, n]` returns up to `n` product lists. Use `All` to return all distinct results.

`ApplyReaction[rxn]` is the operator form that can be applied to a list of molecules.

## Examples

Create a Diels–Alder reaction template and two reactants:

```wolfram
dielsAlder = PatternReaction[
  "[C:1]=[C:2][C:3]=[C:4].[C:5]=[C:6]>>[C:1]1[C:2]=[C:3][C:4][C:5][C:6]1"
];

reactants = Molecule /@ {"(EZ)-1,3-pentadiene", "prop-1-ene"};
```

Apply the reaction and return every distinct product set:

```wolfram
ApplyReaction[dielsAlder, reactants, All]
```

Use the operator form:

```wolfram
ApplyReaction[dielsAlder][reactants]
```

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ApplyReaction.html) for more details.
