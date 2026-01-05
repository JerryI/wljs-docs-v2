# Order

`Order[expr1, expr2]` gives 1 if expr1 is before expr2 in canonical order, and -1 if expr1 is after expr2 in canonical order. It gives 0 if expr1 is identical to expr2.

## Examples

Compare canonical ordering:

```wolfram
Order[a, b]
(* 1 *)
```

Identical expressions:

```wolfram
Order[x^2, x^2]
(* 0 *)
```

Reverse order:

```wolfram
Order[b, a]
(* -1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Order.html) for more details.*