---
title: ContainsAny
---

`ContainsAny[list1, list2]` yields True if list1 contains any of the elements of list2.

`ContainsAny[list2]` is an operator form that yields True when the object to which it is applied contains any of the elements in list2.

## Examples

Check for any matching elements:

```wolfram
ContainsAny[{1, 2, 3, 4}, {3, 5, 7}]
(* True *)
```

No matching elements:

```wolfram
ContainsAny[{1, 2, 3}, {4, 5, 6}]
(* False *)
```

Operator form:

```wolfram
ContainsAny[{x, y}][{a, b, x, c}]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContainsAny.html) for more details.