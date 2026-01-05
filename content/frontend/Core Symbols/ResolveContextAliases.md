# ResolveContextAliases

`ResolveContextAliases` is an option for `Names`, `Contexts` and related functions to control whether to resolve aliases when searching for symbols that match a string pattern.

## Examples

Search for names with alias resolution:

```wolfram
Names["System`*", ResolveContextAliases -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ResolveContextAliases.html) for more details.*