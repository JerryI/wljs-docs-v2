# Paste

`Paste[expr]` pastes expr at the current insertion point in the input notebook.

`Paste[notebook, expr]` pastes expr to the specified notebook.

`Paste[]` pastes the contents of the system clipboard in the input notebook.

`Paste[notebook, Automatic]` pastes the contents of the system clipboard to notebook.

## Examples

```wolfram
Paste["Hello World"]
(* Pastes text at cursor *)
```

```wolfram
Paste[nb, x^2 + y^2]
(* Pastes expression to notebook nb *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Paste.html) for more details.*