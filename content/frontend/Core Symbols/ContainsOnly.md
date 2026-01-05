# ContainsOnly

`ContainsOnly[list1, list2]` yields `True` if list1 contains only elements that appear in list2.

`ContainsOnly[list2]` is an operator form that yields `True` when the object to which it is applied contains only elements that appear in list2.

## Examples

Check if a list contains only specified elements:

```wolfram
ContainsOnly[{a, b, a}, {a, b, c}]
(* True *)
```

```wolfram
ContainsOnly[{a, b, d}, {a, b, c}]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContainsOnly.html) for more details.*