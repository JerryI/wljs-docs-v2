---
title: ChemicalFormulaQ
description: Test whether an expression is a valid chemical formula object.
---

`ChemicalFormulaQ[formula]` returns `True` if `formula` is a valid [`ChemicalFormula`](./ChemicalFormula) object and `False` otherwise.

## Examples

Test a valid formula object:

```wolfram
formula = ChemicalFormula["H2O"];
ChemicalFormulaQ[formula]
(* True *)
```

A formula string is not itself a `ChemicalFormula` object:

```wolfram
ChemicalFormulaQ["H2O"]
(* False *)
```

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChemicalFormulaQ.html) for more details.
