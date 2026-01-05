# NestWhile

`NestWhile[f, expr, test]` applies f repeatedly to expr until `test[result]` is no longer `True`.

`NestWhile[f, expr, test, m]` supplies the most recent m results to test.

`NestWhile[f, expr, test, m, max]` applies f at most max times.

## Examples

Divide by 2 while even:

```wolfram
NestWhile[#/2 &, 64, EvenQ]
(* 1 *)
```

Collatz sequence step:

```wolfram
NestWhile[If[EvenQ[#], #/2, 3# + 1] &, 7, # != 1 &]
(* 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NestWhile.html) for more details.*