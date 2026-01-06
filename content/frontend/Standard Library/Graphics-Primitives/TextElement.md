---
title: TextElement
---

`TextElement[text, props]` represents an element of text with the specified properties.

- `TextElement[{elem1, elem2, ...}, props]` represents text formed from a sequence of elements.
- `TextElement[elems]` represents text where no properties are specified.

## Examples

```wolfram
TextElement["Hello", <|"Language" -> "English"|>]
```

```wolfram
TextElement[{"Hello ", TextElement["World", <|"FontWeight" -> "Bold"|>]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextElement.html) for more details.*