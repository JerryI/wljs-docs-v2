---
title: ChemicalReaction
description: Represent, inspect, validate, and balance chemical reactions in WLJS Notebook.
---

`ChemicalReaction[reactants -> products]` represents a chemical reaction between the specified reactants and products.

Reactants and products can be lists of chemical species or associations that map each species to its stoichiometric coefficient. `ChemicalReaction[string]` parses a reaction written as a string when the chemical species can be identified.

WLJS Notebook displays `ChemicalReaction` objects directly in notebook output, including a formatted reaction equation.

## Examples

Create a reaction from a string:

```wolfram
reaction = ChemicalReaction["Bi(NO3)3 + NaOH -> Bi(OH)3 + NaNO3"]
```

Test whether it is balanced:

```wolfram
ReactionBalancedQ[reaction]
(* False *)
```

Balance the reaction:

```wolfram
balanced = ReactionBalance[reaction]
```

```wolfram
ReactionBalancedQ[balanced]
(* True *)
```

Create a reaction explicitly with molecules and stoichiometric coefficients:

```wolfram
methane = Molecule["C"];
oxygen = Molecule["O=O"];
carbonDioxide = Molecule["O=C=O"];
water = Molecule["O"];

combustion = ChemicalReaction[
  <|methane -> 1, oxygen -> 2|> ->
  <|carbonDioxide -> 1, water -> 2|>
]
```

### Reaction properties

Properties are accessed with `reaction["property"]`:

```wolfram
{
  balanced["Reactants"],
  balanced["Products"],
  balanced["ReactantCounts"],
  balanced["ProductCounts"],
  balanced["EquationString"],
  balanced["ReverseReaction"]
}
```

See [`ReactionBalance`](../Calculus/ReactionBalance) and [`ReactionBalancedQ`](../Calculus/ReactionBalancedQ) for their individual symbol references.

Use [`ChemicalFormula`](./ChemicalFormula) for symbolic formulas. For reaction templates that transform molecules, see [`PatternReaction`](./PatternReaction) and [`ApplyReaction`](./ApplyReaction).

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChemicalReaction.html) for more details.
