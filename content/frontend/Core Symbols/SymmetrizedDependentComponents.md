# SymmetrizedDependentComponents

`SymmetrizedDependentComponents[comp, sym]` gives the list of components that are equivalent to the component comp by the symmetry sym.

## Examples

Find equivalent components:
```wolfram
SymmetrizedDependentComponents[{1, 2}, Symmetric[{1, 2}]]
```

With antisymmetric tensors:
```wolfram
SymmetrizedDependentComponents[{1, 2}, Antisymmetric[{1, 2}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SymmetrizedDependentComponents.html) for more details.*