---
title: ContainsExactly
---

`ContainsExactly[list1, list2]` yields True if list1 contains exactly the same elements as list2.

`ContainsExactly[list2]` is an operator form that yields True when the object to which it is applied contains exactly the same elements as list2.

## Examples

Same elements in different order:

```wolfram
ContainsExactly[{3, 1, 2}, {1, 2, 3}]
(* True *)
```

Different elements:

```wolfram
ContainsExactly[{1, 2, 3}, {1, 2, 4}]
(* False *)
```

Duplicates are ignored:

```wolfram
ContainsExactly[{1, 1, 2}, {1, 2, 2}]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContainsExactly.html) for more details.