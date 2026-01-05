# OddQ

`OddQ[expr]` gives `True` if expr is an odd integer, and `False` otherwise.

## Examples

Test if a number is odd:

```wolfram
OddQ[7]
(* True *)
```

```wolfram
OddQ[4]
(* False *)
```

Filter odd numbers from a list:

```wolfram
Select[Range[10], OddQ]
(* {1, 3, 5, 7, 9} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OddQ.html) for more details.*