# Heads

`Heads` is an option for functions that use level specifications, determining whether heads of expressions should be included.

## Examples

Include heads in replacement:

```wolfram
Replace[f[1, 2], x_Integer :> "int", {0, Infinity}, Heads -> True]
```

With Cases:

```wolfram
Cases[f[1, 2, g[3]], _Symbol, {0, Infinity}, Heads -> True]
(* {f, g} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Heads.html) for more details.*