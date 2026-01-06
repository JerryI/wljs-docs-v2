# TextCases

`TextCases[text, form]` gives a list of all cases of text identified as being of type form that appear in text.

- `TextCases[text, {form1, form2, ...}]` gives an association of results for all the types formi.
- `TextCases[text, formspec -> prop]` gives the specified property for each result found.
- `TextCases[text, spec, n]` gives the first n cases found.

## Examples

```wolfram
TextCases["The cat and dog ran.", "Noun"]
```

```wolfram
TextCases["Call me at 555-1234.", "PhoneNumber"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextCases.html) for more details.*