---
title: TextContents
---

`TextContents[text]` gives a dataset of information about entities, dates, quantities and other content-related elements found in text.

- `TextContents[text, form]` searches for cases of the type form.
- `TextContents[text, {form1, form2, …}]` searches for cases of types form1, form2, ….
- `TextContents[text, forms, props]` includes the property props for each object in the dataset produced.

## Examples

```wolfram
TextContents["I visited Paris on January 5, 2020."]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextContents.html) for more details.*