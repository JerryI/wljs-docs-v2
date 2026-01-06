# ListQ

`ListQ[expr]` gives `True` if the head of expr is `List`, and `False` otherwise.

## Examples

Test for lists:

```wolfram
ListQ[{1, 2, 3}]
(* True *)
```

```wolfram
ListQ[5]
(* False *)
```

Associations are not lists:

```wolfram
ListQ[<|"a" -> 1|>]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListQ.html) for more details.*