# IncludeAromaticBonds

`IncludeAromaticBonds` is an option for `Molecule` that specifies whether aromatic bonds should be detected and labeled.

## Examples

With aromatic bonds:

```wolfram
Molecule["c1ccccc1", IncludeAromaticBonds -> True]
```

Without aromatic bonds:

```wolfram
Molecule["c1ccccc1", IncludeAromaticBonds -> False]
```

Check default:

```wolfram
Options[Molecule, IncludeAromaticBonds]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IncludeAromaticBonds.html) for more details.*