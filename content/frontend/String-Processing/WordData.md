---
title: WordData
---

`WordData["word", "property"]` gives the specified property for the English word "word".

- `WordData["word"]` gives a list of full word specifications representing possible uses and senses of "word".
- `WordData[wordspec, "property"]` gives a property for a particular word specification.

## Examples

Get definitions of a word:

```wolfram
WordData["run", "Definitions"]
```

List all word specifications:

```wolfram
WordData["bank"]
```

Get synonyms for a specific sense:

```wolfram
WordData[{"bank", "Noun", "Riverbank"}, "Synonyms"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WordData.html) for more details.*