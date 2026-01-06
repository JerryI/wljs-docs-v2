# SubsetReplace

`SubsetReplace[list, rules]` replaces sublists in list according to the specified rule or list of rules.

- `SubsetReplace[list, rules, n]` does only the first n replacements.
- `SubsetReplace[rules]` represents an operator form of `SubsetReplace` that can be applied to an expression.

## Examples

```wolfram
SubsetReplace[{1, 2, 3, 4}, {1, 2} -> x]
```

```wolfram
SubsetReplace[{a, b, c, b, c, d}, {b, c} -> z, 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SubsetReplace.html) for more details.*