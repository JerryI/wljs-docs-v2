# TeXForm

`TeXForm[expr]` gives the TeX (LaTeX) representation of expr.

## Examples

Convert to TeX:

```wolfram
TeXForm[a/b]
(* \frac{a}{b} *)
```

```wolfram
TeXForm[Sqrt[x^2 + y^2]]
(* \sqrt{x^2+y^2} *)
```

Integral:

```wolfram
TeXForm[Integrate[f[x], x]]
(* \int f(x) \, dx *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TeXForm.html) for more details.*