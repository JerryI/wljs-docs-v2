# Gather

`Gather[list]` gathers the elements of list into sublists of identical elements.

## Examples

Group identical elements:

```wolfram
Gather[{a, b, a, c, b, a}]
(* {{a, a, a}, {b, b}, {c}} *)
```

With custom test:

```wolfram
Gather[{1, -1, 2, -2, 3}, Abs[#1] == Abs[#2] &]
(* {{1, -1}, {2, -2}, {3}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Gather.html) for more details.*