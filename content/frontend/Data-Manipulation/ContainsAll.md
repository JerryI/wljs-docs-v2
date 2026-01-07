---
title: ContainsAll
---

`ContainsAll[list1, list2]` yields True if list1 contains all of the elements of list2.

`ContainsAll[list2]` is an operator form that yields True when the object to which it is applied contains all of the elements of list2.

## Examples

Check if list contains all elements:

```wolfram
ContainsAll[{1, 2, 3, 4, 5}, {2, 4}]
(* True *)
```

Missing elements:

```wolfram
ContainsAll[{1, 2, 3}, {2, 4}]
(* False *)
```

Operator form:

```wolfram
ContainsAll[{a, b}][{a, b, c, d}]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContainsAll.html) for more details.*