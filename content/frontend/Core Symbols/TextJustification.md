# TextJustification

`TextJustification` is an option for `Cell` and `Inset` which specifies how much lines of text can be stretched in order to make them be the same length.

## Examples

Full justification:

```wolfram
Cell["Long text that needs justification...", TextJustification -> 1]
```

No justification (ragged right):

```wolfram
Cell["Text without justification", TextJustification -> 0]
```

Partial justification:

```wolfram
Cell["Partially justified text", TextJustification -> 0.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextJustification.html) for more details.*