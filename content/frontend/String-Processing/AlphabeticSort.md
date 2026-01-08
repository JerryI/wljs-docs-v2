---
title: AlphabeticSort
---

`AlphabeticSort[list]` sorts the elements of list into alphabetical order.

`AlphabeticSort[list, lang]` sorts using an ordering suitable for the language lang.

## Examples

Sort strings alphabetically:

```wolfram
AlphabeticSort[{"banana", "apple", "cherry"}]
(* {"apple", "banana", "cherry"} *)
```

Sort using German locale:

```wolfram
AlphabeticSort[{"Äpfel", "Birne", "Apfel"}, "German"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AlphabeticSort.html) for more details.