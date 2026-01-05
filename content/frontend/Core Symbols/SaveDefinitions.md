# SaveDefinitions

`SaveDefinitions` is an option to `Manipulate` and related functions that specifies whether current definitions should automatically be saved with the output.

## Examples

Save definitions with Manipulate:

```wolfram
f[x_] := x^2;
Manipulate[Plot[f[x], {x, -a, a}], {a, 1, 5}, SaveDefinitions -> True]
```

This ensures the definition of `f` is saved with the manipulate.

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SaveDefinitions.html) for more details.*