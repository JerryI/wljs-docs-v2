# ChemicalData

`ChemicalData["name", "property"]` gives the value of the specified property for the chemical named.

`ChemicalData["name"]` gives a structure diagram for the chemical with the specified name.

`ChemicalData["class"]` gives a list of available chemicals in the specified class.

## Examples

Get the molecular weight of water:

```wolfram
ChemicalData["Water", "MolecularWeight"]
(* 18.015 *)
```

Get a structure diagram:

```wolfram
ChemicalData["Caffeine"]
(* Molecule[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChemicalData.html) for more details.*