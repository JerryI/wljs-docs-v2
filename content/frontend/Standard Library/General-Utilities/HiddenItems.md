---
title: HiddenItems
---

`HiddenItems` is an option for `Dataset` that specifies which items to hide.

## Examples

Hide specific columns in a dataset:

```wolfram
ds = Dataset[{<|"a" -> 1, "b" -> 2, "c" -> 3|>, <|"a" -> 4, "b" -> 5, "c" -> 6|>}];
Dataset[ds, HiddenItems -> {"b"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HiddenItems.html) for more details.*