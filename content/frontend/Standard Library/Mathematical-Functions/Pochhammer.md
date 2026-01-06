# Pochhammer

`Pochhammer[a, n]` gives the Pochhammer symbol (a)_n = a(a+1)(a+2)...(a+n-1), also called the rising factorial.

## Examples

Pochhammer symbol:

```wolfram
Pochhammer[3, 4]
(* 360 - equals 3*4*5*6 *)
```

Relation to Gamma:

```wolfram
Pochhammer[a, n] == Gamma[a + n]/Gamma[a]
(* True *)
```

Useful in series expansions:

```wolfram
Pochhammer[1/2, 3]
(* 15/8 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Pochhammer.html) for more details.*