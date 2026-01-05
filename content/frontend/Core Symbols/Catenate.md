# Catenate

`Catenate[{list1, list2, ...}]` yields a single list with all elements from the listi in order.

`Catenate[{assoc1, assoc2, ...}]` yields a list of all values in order appearing in the associations associ.

## Examples

Catenate multiple lists:

```wolfram
Catenate[{{a, b}, {c, d, e}, {f}}]
(* {a, b, c, d, e, f} *)
```

Catenate associations:

```wolfram
Catenate[{<|"a" -> 1|>, <|"b" -> 2|>}]
(* {1, 2} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Catenate.html) for more details.*