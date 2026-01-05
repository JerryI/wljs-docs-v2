# FormFunction

```
FormFunction[formspec,func] represents an active form that, when submitted, applies func to the values obtained from the form specified by formspec.

FormFunction[{name1->type1,…},func] represents an active form with fields named namei interpreted as types typei.

FormFunction[{{name1,label1}->type1,…},func] uses labeli as the label for the field named namei.

FormFunction[{namespec1->type1->default1,…},func] uses defaulti as the default for the field specified by namespeci.

FormFunction[formspec,func,fmt] specifies that in the cloud, the result from applying func should be returned in format fmt.

FormFunction[{formspec1,formspec2,…},func,…] represents a multipage form, in which the successive formspeci can be functions that are applied to the values obtained so far.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*