# Infix

`Infix[f[e1, e2, ...]]` prints with f in default infix form: e1~f~e2~f~e3....

`Infix[expr, h]` prints with arguments separated by h.

## Examples

Default infix form:

```wolfram
Infix[f[a, b, c]]
(* a ~f~ b ~f~ c *)
```

Custom separator:

```wolfram
Infix[Plus[a, b, c], " + "]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Infix.html) for more details.*