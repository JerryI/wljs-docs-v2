# ContainsNone

`ContainsNone[list1, list2]` yields True if list1 contains none of the elements in list2.

`ContainsNone[list2]` is an operator form that yields True when the object to which it is applied contains none of the elements of list2.

## Examples

No matching elements:

```wolfram
ContainsNone[{1, 2, 3}, {4, 5, 6}]
(* True *)
```

Some matching elements:

```wolfram
ContainsNone[{1, 2, 3}, {3, 4, 5}]
(* False *)
```

Operator form:

```wolfram
ContainsNone[{x, y}][{a, b, c}]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContainsNone.html) for more details.*