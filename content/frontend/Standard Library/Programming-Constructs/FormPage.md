# FormPage

`FormPage[formspec,func]` represents an active page that takes input from a form and generates results on the same page by applying func to the values obtained from the form whose structure is defined by formspec.

`FormPage[{name1->type1,…},func]` represents an active form page with fields named namei interpreted as types typei.

`FormPage[{{name1,label1}->type1,…},func]` uses labeli as the label for the field named namei.

`FormPage[{namespec1->type1->default1,…},func]` uses defaulti as the default for the field specified by namespeci.

`FormPage[formspec,func,form]` lays out the page according to the layout specification form.

`FormPage[formspec,func,initform->resform]` uses initform as the initial layout specification and resform as the layout specification for result pages.

## Examples

```wolfram
FormPage[{"x" -> "Number"}, #x^2 &]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FormPage.html) for more details.*