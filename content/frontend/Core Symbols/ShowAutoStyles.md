# ShowAutoStyles

`ShowAutoStyles` is an option for `Cell` that specifies whether styles that are specified to be automatically used for various syntactic and other constructs should be shown.

This controls automatic syntax coloring and styling in notebook cells.

## Examples

```wolfram
Cell["Sin[x]", ShowAutoStyles -> True]
```

```wolfram
Cell["undefined + 1", ShowAutoStyles -> False]
```

```wolfram
Options[EvaluationNotebook[], ShowAutoStyles]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShowAutoStyles.html) for more details.*