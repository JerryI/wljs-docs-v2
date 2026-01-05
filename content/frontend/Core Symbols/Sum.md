# Sum

`Sum[f, {i, imax}]` evaluates the sum from i=1 to imax.

`Sum[f, {i, imin, imax}]` starts with i=imin.

`Sum[f, {i, imin, imax, di}]` uses steps di.

## Examples

Sum of integers:

```wolfram
Sum[i, {i, 1, 10}]
(* 55 *)
```

Sum of squares:

```wolfram
Sum[i^2, {i, 1, 5}]
(* 55 *)
```

Symbolic sum:

```wolfram
Sum[i, {i, 1, n}]
(* n(n+1)/2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Sum.html) for more details.*