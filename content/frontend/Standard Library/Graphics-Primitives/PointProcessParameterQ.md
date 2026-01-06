# PointProcessParameterQ

`PointProcessParameterQ[proc]` yields `True` if proc is a valid random point process, and yields `False` otherwise.

## Examples

Check a Poisson point process:

```wolfram
PointProcessParameterQ[PoissonPointProcess[1, 2]]
(* True *)
```

An invalid point process:

```wolfram
PointProcessParameterQ[PoissonPointProcess[-1, 2]]
(* False *)
```

Check a Matérn point process:

```wolfram
PointProcessParameterQ[MaternPointProcess[5, 0.1, 2]]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointProcessParameterQ.html) for more details.*