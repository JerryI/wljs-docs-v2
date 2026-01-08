---
title: Which
---

`Which[test1, value1, test2, value2, ...]` evaluates each test in turn, returning the value corresponding to the first one that yields `True`.

## Examples

Multiple conditions:

```wolfram
x = 5;
Which[
  x < 0, "negative",
  x == 0, "zero",
  x > 0, "positive"
]
(* "positive" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Which.html) for more details.