---
title: ReactionBalancedQ
---

`ReactionBalancedQ[rxn]` returns True if the given chemical reaction is balanced, and False otherwise.

## Examples

```wolfram
ReactionBalancedQ["2H2 + O2 -> 2H2O"]
```

```wolfram
combustion = ChemicalReaction[
  <|ChemicalFormula["CH4"] -> 1, ChemicalFormula["O2"] -> 2|> ->
  <|ChemicalFormula["CO2"] -> 1, ChemicalFormula["H2O"] -> 2|>
];

ReactionBalancedQ[combustion]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReactionBalancedQ.html) for more details.
