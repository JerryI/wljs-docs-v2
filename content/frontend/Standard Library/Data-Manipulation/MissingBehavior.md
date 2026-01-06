---
title: MissingBehavior
---

`MissingBehavior` is an option to `Query` and related functions that specifies how expressions with head Missing should be interpreted in the context of other functions.

## Examples

With Query:

```wolfram
Query[All, "key", MissingBehavior -> None][{<|"key" -> 1|>, <||>}]
```

Handle missing gracefully:

```wolfram
data = {<|"a" -> 1|>, <|"b" -> 2|>};
Query[All, "a", MissingBehavior -> Identity][data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MissingBehavior.html) for more details.*