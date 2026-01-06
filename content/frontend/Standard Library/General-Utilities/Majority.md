# Majority

`Majority[e1, e2, ...]` gives True if the majority of the ei are True, and False if the majority are False.

## Examples

Simple majority:

```wolfram
Majority[True, True, False]
(* True *)
```

False majority:

```wolfram
Majority[False, False, True, True, False]
(* False *)
```

With Boolean expressions:

```wolfram
Majority[1 > 0, 2 > 3, 4 > 2]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Majority.html) for more details.*