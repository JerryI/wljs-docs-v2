# ChemicalFormula

`ChemicalFormula[<|elem1 -> n1, elem2 -> n2, ...|>]` represents a chemical species with ni atoms of the element elemi.

`ChemicalFormula[chem]` returns the chemical formula corresponding to the given input.

`ChemicalFormula[..., <|qual1 -> val1, qual2 -> val2, ...|>]` represents a species whose qualifiers quali have values vali.

## Examples

Create a water molecule formula:

```wolfram
ChemicalFormula[<|"H" -> 2, "O" -> 1|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChemicalFormula.html) for more details.*