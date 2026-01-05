# TaggingRules

`TaggingRules` is an option for selections that specifies a list of strings to be associated with a selection.

## Examples

Add tagging rules to a cell:

```wolfram
Cell["Content", TaggingRules -> {"category" -> "example"}]
```

Use tagging rules in a notebook:

```wolfram
Notebook[{Cell["Data"]}, TaggingRules -> {"author" -> "John"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TaggingRules.html) for more details.*