# UnsetShared

`UnsetShared[s1, s2, ...]` stops the sharing of the variables or functions si among parallel kernels.

- `UnsetShared[patt]` stops the sharing of all variables and functions whose names match the string pattern patt.

## Examples

```wolfram
UnsetShared[x]
```

```wolfram
UnsetShared["Global`*"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnsetShared.html) for more details.*