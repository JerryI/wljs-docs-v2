# Replace

`Replace[expr, rules]` applies a rule or list of rules in an attempt to transform the entire expression expr.

`Replace[expr, rules, levelspec]` applies rules to parts of expr specified by levelspec.

## Examples

Replace the whole expression:

```wolfram
Replace[{a, b}, {a, b} -> x]
(* x *)
```

Replace at specific levels:

```wolfram
Replace[{a, b, c}, x_ -> f[x], {1}]
(* {f[a], f[b], f[c]} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Replace.html) for more details.*