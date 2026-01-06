# PrecedenceForm

`PrecedenceForm[expr,prec]` prints with expr parenthesized as it would be if it contained an operator with precedence prec.

## Examples

Display with high precedence (no parentheses needed):

```wolfram
PrecedenceForm[a + b, 1000]
(* a + b *)
```

Display with low precedence (parentheses added):

```wolfram
PrecedenceForm[a + b, 100]
(* (a + b) *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PrecedenceForm.html) for more details.*