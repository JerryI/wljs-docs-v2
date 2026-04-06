---
title: QuantityForm
---

`QuantityForm[expr, form]` prints expr with all Quantity expressions using the specified unit display form form.

- `QuantityForm[expr, {forms}]` prints expr using the appropriate combination of the specified unit display forms forms.

## Examples

Abbreviated units:

```wolfram
QuantityForm[Quantity[5, "Meters"], "Abbreviation"]
```

Full names:

```wolfram
QuantityForm[Quantity[10, "Kilometers/Hour"], "LongName"]
```

Multiple forms:

```wolfram
QuantityForm[Quantity[9.8, "Meters/Seconds^2"], {"Abbreviation"}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuantityForm.html) for more details.