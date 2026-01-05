# TraceDialog

`TraceDialog[expr]` initiates a dialog for every expression used in the evaluation of expr.

`TraceDialog[expr,form]` initiates a dialog only for expressions which match form.

`TraceDialog[expr,s]` initiates dialogs only for expressions whose evaluations use transformation rules associated with the symbol s.

## Examples

```wolfram
TraceDialog[1 + 2 + 3]
(* Opens dialog for each step of evaluation *)
```

```wolfram
TraceDialog[Integrate[x^2, x], Integrate]
(* Opens dialog only for Integrate expressions *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TraceDialog.html) for more details.*