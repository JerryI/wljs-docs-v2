# ElectricSymmetryValue

`ElectricSymmetryValue[pred, vars, pars]` represents an electric symmetry boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

`ElectricSymmetryValue[pred, vars, pars, lkey]` represents an electric symmetry boundary condition with local parameters specified in pars[lkey].

## Examples

Create electric symmetry condition:

```wolfram
ElectricSymmetryValue[x == 0, {V}, <||>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ElectricSymmetryValue.html) for more details.*