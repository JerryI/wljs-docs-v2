# IntegerQ

`IntegerQ[expr]` gives `True` if expr is an integer, and `False` otherwise.

## Examples

Test for integers:

```wolfram
IntegerQ[5]
(* True *)
```

```wolfram
IntegerQ[5.0]
(* False *)
```

Filter integers from a list:

```wolfram
Select[{1, 2.5, 3, 4.2, 5}, IntegerQ]
(* {1, 3, 5} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IntegerQ.html) for more details.*