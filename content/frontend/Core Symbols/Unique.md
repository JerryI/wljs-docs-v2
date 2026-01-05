# Unique

`Unique[]` generates a new symbol with a name of the form `$nnn`.

`Unique[x]` generates a new symbol with a name of the form `x$nnn`.

## Examples

Generate a unique symbol:

```wolfram
Unique[]
(* $1 *)
```

With a base name:

```wolfram
Unique[x]
(* x$1 *)
```

Generate multiple:

```wolfram
Unique[{a, b, c}]
(* {a$1, b$2, c$3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Unique.html) for more details.*