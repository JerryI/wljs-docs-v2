# Cubics

`Cubics` is an option for functions that involve solving algebraic equations, that specifies whether explicit forms for solutions to cubic equations should be given.

## Examples

```wolfram
Solve[x^3 + x + 1 == 0, x, Cubics -> True]
(* {{x -> ...}, {x -> ...}, {x -> ...}} *)
```

```wolfram
Solve[x^3 + x + 1 == 0, x, Cubics -> False]
(* {{x -> Root[1 + #1 + #1^3 &, 1]}, ...} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Cubics.html) for more details.*