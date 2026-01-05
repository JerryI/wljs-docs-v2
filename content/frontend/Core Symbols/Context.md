# Context

`Context[]` gives the current context. `Context[symbol]` gives the context in which a symbol appears.

## Examples

Get the current context:

```wolfram
Context[]
(* "Global`" *)
```

Get context of a built-in symbol:

```wolfram
Context[Sin]
(* "System`" *)
```

Get context of a user symbol:

```wolfram
Context[myVar]
(* "Global`" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Context.html) for more details.*