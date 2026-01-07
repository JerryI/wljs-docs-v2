---
title: SameTest
---

`SameTest` is an option whose setting gives a pairwise comparison function to determine whether expressions should be considered the same.

## Examples

```wolfram
Union[{1.0, 1.00001, 2}, SameTest -> (Abs[#1 - #2] < 0.001 &)]
```

```wolfram
DeleteDuplicates[{"a", "A", "b"}, SameTest -> (ToLowerCase[#1] == ToLowerCase[#2] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SameTest.html) for more details.*