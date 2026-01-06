# Splice

`Splice[{e1, e2, ...}]` represents an expression that will automatically be spliced into any list in which it appears as the sequence of elements ei.

`Splice[{e1, e2, ...}, hpatt]` represents an expression that will automatically be spliced into any expression whose head matches the pattern hpatt.

## Examples

Splice elements into a list:

```wolfram
{1, Splice[{2, 3}], 4}
(* {1, 2, 3, 4} *)
```

Splice in function arguments:

```wolfram
f[a, Splice[{b, c}], d]
(* f[a, b, c, d] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Splice.html) for more details.*