# Rationalize

`Rationalize[x]` converts an approximate number x to a nearby rational with small denominator.

`Rationalize[x, dx]` yields the rational number with smallest denominator that lies within dx of x.

## Examples

Convert to rational:

```wolfram
Rationalize[0.333333]
(* 1/3 *)
```

With tolerance:

```wolfram
Rationalize[3.14159, 0.001]
(* 22/7 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Rationalize.html) for more details.*