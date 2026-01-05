# Assumptions

`Assumptions` is an option for functions such as `Simplify`, `Refine`, and `Integrate` that specifies default assumptions to be made about symbolic quantities.

## Examples

```wolfram
Simplify[Sqrt[x^2], Assumptions -> x > 0]
(* x *)
```

```wolfram
Integrate[1/x, {x, 1, a}, Assumptions -> a > 1]
(* Log[a] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Assumptions.html) for more details.*