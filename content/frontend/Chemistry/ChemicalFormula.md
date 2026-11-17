---
title: ChemicalFormula
description: Represent the elemental composition of a chemical species.
---

`ChemicalFormula[chem]` returns the chemical formula corresponding to `chem`.

`ChemicalFormula[<|element1 -> count1, element2 -> count2, ...|>]` constructs a formula from element counts. Elements can be specified with atomic-symbol strings such as `"C"` and `"O"`.

## Examples

Create a formula from a string:

```wolfram
formula = ChemicalFormula["C6H12O6"]
```

Construct the same formula from element counts:

```wolfram
ChemicalFormula[<|"C" -> 6, "H" -> 12, "O" -> 6|>]
```

Get the formula of a molecule:

```wolfram
ChemicalFormula[Molecule["caffeine"]]
```

Access formula properties:

```wolfram
{
  formula["ElementCounts"],
  formula["HillFormulaString"],
  formula["MolecularMass"]
}
```

Use [`ChemicalFormulaQ`](./ChemicalFormulaQ) to test whether an expression is a valid formula object. Chemical formulas can also be used as species in a [`ChemicalReaction`](./ChemicalReaction).

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChemicalFormula.html) for more details.
