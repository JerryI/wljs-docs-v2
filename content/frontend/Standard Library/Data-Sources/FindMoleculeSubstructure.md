# FindMoleculeSubstructure

`FindMoleculeSubstructure[mol,patt]` finds a mapping between the atom indices in mol and an occurrence of patt in mol.

- `FindMoleculeSubstructure[mol,patt,All]` finds all occurrences of patt in mol and returns all mappings.
- `FindMoleculeSubstructure[mol,patt,n]` finds at most n mappings.

## Examples

```wolfram
(* Find benzene ring in a molecule *)
mol = Molecule["aspirin"];
FindMoleculeSubstructure[mol, Molecule["benzene"]]

(* Find all occurrences *)
FindMoleculeSubstructure[mol, Molecule["C=O"], All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMoleculeSubstructure.html) for more details.*