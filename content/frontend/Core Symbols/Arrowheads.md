# Arrowheads

`Arrowheads[size]` is a graphics directive specifying arrowhead size. `Arrowheads[{spec1, spec2, ...}]` allows multiple arrowheads.

## Examples

Customize arrowheads:

```wolfram
Graphics[{
  Arrowheads[Large],
  Arrow[{{0, 0}, {1, 0}}],
  Arrowheads[Medium],
  Arrow[{{0, 0.3}, {1, 0.3}}]
}]

(* Arrowheads on both ends *)
Graphics[{Arrowheads[{-0.05, 0.05}], Arrow[{{0, 0}, {1, 0}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Arrowheads.html) for more details.*