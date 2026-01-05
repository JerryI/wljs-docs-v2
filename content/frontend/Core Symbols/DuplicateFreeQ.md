# DuplicateFreeQ

`DuplicateFreeQ[list]` gives True if list has no duplicates, and False otherwise.

`DuplicateFreeQ[list,test]` applies test to pairs of elements to determine whether they should be considered duplicates.

## Examples

Check if a list has no duplicates:

```wolfram
DuplicateFreeQ[{a, b, c}]
(* True *)
```

```wolfram
DuplicateFreeQ[{a, b, a}]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DuplicateFreeQ.html) for more details.*