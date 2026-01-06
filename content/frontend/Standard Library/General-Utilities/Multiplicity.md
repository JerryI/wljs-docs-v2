# Multiplicity

`Multiplicity` is an option to `Roots`. `Multiplicity -> n` specifies that the multiplicity of each of the roots is n in the final result.

## Examples

Find roots with multiplicity:

```wolfram
Solve[(x - 1)^3 == 0, x]
(* {{x -> 1}, {x -> 1}, {x -> 1}} *)
```

Use with CountRoots:

```wolfram
CountRoots[(x - 1)^2 (x + 1), x]
(* 3 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Multiplicity.html) for more details.*